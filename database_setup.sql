-- SQL script to create the ideas table in Supabase
-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor)

-- Create the ideas table
CREATE TABLE IF NOT EXISTS ideas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    idea TEXT NOT NULL,
    name TEXT NOT NULL,
    college TEXT NOT NULL,
    year TEXT NOT NULL,
    class TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_ideas_created_at ON ideas(created_at DESC);

-- Enable Row Level Security (RLS) - optional but recommended
ALTER TABLE ideas ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all operations for authenticated users
-- Adjust this based on your security requirements
CREATE POLICY "Allow all operations for authenticated users" ON ideas
    FOR ALL USING (auth.role() = 'authenticated');

-- If you want to allow public submissions (no authentication required), use this instead:
-- CREATE POLICY "Allow all operations for everyone" ON ideas
--     FOR ALL USING (true);

-- Optional: Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_ideas_updated_at
    BEFORE UPDATE ON ideas
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();