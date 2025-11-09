-- Fix RLS Policy to Allow Public Submissions
-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor)
-- This will allow anyone to submit ideas without authentication

-- First, drop the existing policy if it exists
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON ideas;

-- Create a new policy that allows public submissions (no authentication required)
CREATE POLICY "Allow all operations for everyone" ON ideas
    FOR ALL USING (true);

-- Verify the policy was created
-- You can check this in Supabase Dashboard > Authentication > Policies

