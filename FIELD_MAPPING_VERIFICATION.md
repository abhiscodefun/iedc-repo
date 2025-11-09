# Field Mapping Verification

## Database Table Schema (ideas)
| Column Name | Type | Required | Auto-Generated | Notes |
|------------|------|----------|----------------|-------|
| `id` | UUID | Yes | Yes | Primary key, auto-generated |
| `idea` | TEXT | Yes | No | Main idea content |
| `name` | TEXT | Yes | No | User's name |
| `college` | TEXT | Yes | No | User's college |
| `year` | TEXT | Yes | No | Academic year |
| `class` | TEXT | No | No | Class name (nullable) |
| `status` | TEXT | No | Yes | Default: 'pending' |
| `created_at` | TIMESTAMP | No | Yes | Auto-generated |
| `updated_at` | TIMESTAMP | No | Yes | Auto-generated |

## Form Fields (ArisePage)
| Form Field | State Variable | Database Column | Mapping |
|-----------|---------------|-----------------|---------|
| Idea Title | `ideaTitle` | `idea` (combined) | Combined with `idea` |
| Idea Description | `idea` | `idea` (combined) | Combined with `ideaTitle` |
| Name | `name` | `name` | Direct mapping ✅ |
| College | `college` | `college` | Direct mapping ✅ |
| Year | `year` | `year` | Direct mapping ✅ |
| Class | `className` | `class` | Mapped in submitIdea() ✅ |

## Data Submission Mapping
```javascript
{
  idea: ideaTitle ? `${ideaTitle}\n\n${idea}` : idea,  // ✅ Maps to `idea` column
  name: name,                                           // ✅ Maps to `name` column
  college: college,                                     // ✅ Maps to `college` column
  year: year,                                           // ✅ Maps to `year` column
  className: className                                  // ✅ Maps to `class` column (via mapping)
}
```

## Verification Result
✅ **All fields match correctly!**

- Form field `className` is correctly mapped to database column `class`
- All required fields are present
- Optional fields are handled correctly
- Auto-generated fields are not being sent (correct behavior)

## Potential Issues to Check
1. **RLS Policy**: Make sure public access is enabled (run `fix_rls_policy.sql`)
2. **Column Names**: Verify actual database columns match the schema (case-sensitive)
3. **Data Types**: All fields are TEXT, so no type mismatches expected
4. **Null Constraints**: `class` is nullable, so empty values should be fine

