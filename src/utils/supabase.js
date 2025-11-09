import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table name for ideas
export const IDEAS_TABLE = 'ideas'

// Helper function to submit an idea to Supabase
// Field mapping:
// - ideaData.idea -> 'idea' column (TEXT NOT NULL)
// - ideaData.name -> 'name' column (TEXT NOT NULL)
// - ideaData.college -> 'college' column (TEXT NOT NULL)
// - ideaData.year -> 'year' column (TEXT NOT NULL)
// - ideaData.className -> 'class' column (TEXT, nullable)
// - status -> 'status' column (TEXT, default: 'pending')
// Auto-generated: id, created_at, updated_at
export const submitIdea = async (ideaData) => {
  try {
    // Build insert object according to SQL schema
    const insertData = {
      idea: ideaData.idea,           // TEXT NOT NULL - required
      name: ideaData.name,           // TEXT NOT NULL - required
      college: ideaData.college,     // TEXT NOT NULL - required
      year: ideaData.year,           // TEXT NOT NULL - required
      status: 'pending'              // TEXT (default: 'pending')
      // Auto-generated: id (UUID), created_at (TIMESTAMP), updated_at (TIMESTAMP)
    }
    
    // Only include 'class' if it has a value (it's nullable in SQL)
    // Note: 'className' (form field) maps to 'class' (database column)
    if (ideaData.className && ideaData.className.trim()) {
      insertData.class = ideaData.className.trim()
    }

    const { data, error } = await supabase
      .from(IDEAS_TABLE)
      .insert([insertData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      console.error('Error details:', error.details)
      console.error('Error hint:', error.hint)
      
      // Return error object instead of throwing
      let errorMessage = 'Failed to store idea in database.';
      
      // Check for specific error types
      if (error.code === 'PGRST205' || error.message?.includes("Could not find the table")) {
        errorMessage = 'Database table not found. Please contact administrator.';
      } else if (error.code === '42501' || error.message?.includes("permission denied") || error.message?.includes("new row violates row-level security")) {
        errorMessage = 'Permission denied. The database requires authentication or public access is not enabled. Please contact administrator.';
      } else if (error.code === '42703' || error.message?.includes("column") || error.message?.includes("does not exist")) {
        errorMessage = 'Database column mismatch. The table structure does not match the expected schema. Please contact administrator.';
        console.error('⚠️ COLUMN MISMATCH DETECTED! Check if database columns match: idea, name, college, year, class, status');
      } else if (error.code === '23502' || error.message?.includes("null value") || error.message?.includes("violates not-null constraint")) {
        errorMessage = 'Missing required field. Please fill all required fields.';
      } else if (error.message) {
        errorMessage = `Database error: ${error.message}`;
      }
      
      return { 
        success: false, 
        error: errorMessage,
        errorDetails: error 
      }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error submitting idea:', error)
    return { 
      success: false, 
      error: error.message || 'An unexpected error occurred. Please try again.',
      errorDetails: error 
    }
  }
}