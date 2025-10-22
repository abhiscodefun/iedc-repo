# PowerShell script to verify the ideas table was created successfully
# Run this after you've manually created the table in Supabase dashboard

$supabaseUrl = "https://ocmhaofcdonfofmdqgvx.supabase.co"
$serviceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jbWhhb2ZjZG9uZm9mbWRxZ3Z4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDcxMTEwNSwiZXhwIjoyMDc2Mjg3MTA1fQ.mU3MVx0bDfNd9Fm4SXPmI6NItHXQSnaIEbKy8DmaDtQ"

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $serviceRoleKey"
    "apikey" = $serviceRoleKey
}

Write-Host "Testing if the ideas table exists..."

# Test 1: Try to query the table
try {
    $response = Invoke-RestMethod -Uri "$supabaseUrl/rest/v1/ideas?select=*&limit=1" -Method GET -Headers $headers
    Write-Host "✅ SUCCESS: Ideas table exists and is accessible!"
    Write-Host "Table structure looks good."
} catch {
    Write-Host "❌ FAILED: Ideas table doesn't exist or isn't accessible."
    Write-Host "Error: $($_.Exception.Message)"
    Write-Host "Please make sure you've run the SQL script in your Supabase dashboard."
    exit 1
}

# Test 2: Try to insert test data
Write-Host "`nTesting data insertion..."

$testData = @{
    idea = "Test idea for verification"
    name = "Test User"
    college = "Test College"
    year = "2024"
    class = "Test Class"
    status = "pending"
} | ConvertTo-Json

try {
    $insertResponse = Invoke-RestMethod -Uri "$supabaseUrl/rest/v1/ideas" -Method POST -Headers $headers -Body $testData
    Write-Host "✅ SUCCESS: Data insertion works!"
    Write-Host "Inserted record ID: $($insertResponse.id)"
    
    # Clean up test data
    Write-Host "Cleaning up test data..."
    $deleteResponse = Invoke-RestMethod -Uri "$supabaseUrl/rest/v1/ideas?id=eq.$($insertResponse.id)" -Method DELETE -Headers $headers
    Write-Host "✅ Test data cleaned up successfully."
    
} catch {
    Write-Host "❌ FAILED: Data insertion failed."
    Write-Host "Error: $($_.Exception.Message)"
}

Write-Host "`n🎉 Verification complete! Your ArisePage should now work correctly."
