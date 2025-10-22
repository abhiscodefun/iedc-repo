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
export const submitIdea = async (ideaData) => {
  try {
    const { data, error } = await supabase
      .from(IDEAS_TABLE)
      .insert([
        {
          idea: ideaData.idea,
          name: ideaData.name,
          college: ideaData.college,
          year: ideaData.year,
          class: ideaData.className,
          created_at: new Date().toISOString(),
          status: 'pending' // You can add status tracking if needed
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      
      // Check if it's a table not found error
      if (error.code === 'PGRST205' && error.message.includes("Could not find the table")) {
        console.error('Database table "ideas" not found. Please run the SQL script in your Supabase dashboard.')
        throw new Error('Database table not found. Please contact administrator.')
      }
      
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error submitting idea:', error)
    throw error
  }
}