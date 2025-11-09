# Complete Field Mapping: ArisePage ↔ SQL Schema

## SQL Schema (database_setup.sql)
```sql
CREATE TABLE ideas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    idea TEXT NOT NULL,           -- Required
    name TEXT NOT NULL,           -- Required
    college TEXT NOT NULL,        -- Required
    year TEXT NOT NULL,           -- Required
    class TEXT,                   -- Optional (nullable)
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Form Fields (ArisePage.tsx)

### Required Fields (NOT NULL in SQL)
| Form Field | State Variable | Database Column | Validation |
|------------|---------------|-----------------|------------|
| Idea Description | `idea` | `idea` | ✅ Required |
| Idea Title | `ideaTitle` | `idea` (combined) | Optional (combined with idea) |
| Name | `name` | `name` | ✅ Required |
| College | `college` | `college` | ✅ Required |
| Year | `year` | `year` | ✅ Required |

### Optional Fields (Nullable in SQL)
| Form Field | State Variable | Database Column | Validation |
|------------|---------------|-----------------|------------|
| Class | `className` | `class` | Optional (nullable) |

## Data Flow

### 1. Form Input (ArisePage.tsx)
```javascript
// User inputs:
- ideaTitle: "My Great Idea"
- idea: "This is the description..."
- name: "John Doe"
- college: "ABC University"
- year: "2024"
- className: "CS101" (optional)
```

### 2. Data Preparation (handleSubmit)
```javascript
const ideaData = {
  idea: ideaTitle ? `${ideaTitle}\n\n${idea}` : idea,  // Combine title + description
  name: name.trim(),
  college: college.trim(),
  year: year.trim(),
  className: className.trim()  // Optional, can be empty
};
```

### 3. Database Insert (supabase.js)
```javascript
const insertData = {
  idea: ideaData.idea,        // TEXT NOT NULL ✅
  name: ideaData.name,        // TEXT NOT NULL ✅
  college: ideaData.college,  // TEXT NOT NULL ✅
  year: ideaData.year,        // TEXT NOT NULL ✅
  status: 'pending'           // TEXT (default) ✅
};

// Only include 'class' if it has a value (nullable)
if (ideaData.className && ideaData.className.trim()) {
  insertData.class = ideaData.className.trim();  // TEXT (nullable) ✅
}
```

## Validation Rules

### ✅ Required Fields (Enforced in handleSubmit)
- `idea` - Must not be empty
- `name` - Must not be empty
- `college` - Must not be empty
- `year` - Must not be empty

### ✅ Optional Fields
- `className` (maps to `class`) - Can be empty, will be omitted from insert if empty

### ✅ Auto-Generated Fields (Not sent by form)
- `id` - UUID, auto-generated
- `created_at` - TIMESTAMP, auto-generated
- `updated_at` - TIMESTAMP, auto-generated
- `status` - Set to 'pending' by default

## Key Points

1. **Field Name Mapping**: `className` (JavaScript/React) → `class` (SQL - reserved word in JS)
2. **Idea Combination**: `ideaTitle` and `idea` are combined into a single `idea` column
3. **Optional Handling**: `class` column is only included in insert if `className` has a value
4. **Data Trimming**: All string fields are trimmed to remove leading/trailing whitespace
5. **Validation**: Only NOT NULL fields are validated; optional fields can be empty

## Testing Checklist

- [ ] Submit with all required fields filled → Should succeed
- [ ] Submit with class field empty → Should succeed (class is nullable)
- [ ] Submit without idea → Should show validation error
- [ ] Submit without name → Should show validation error
- [ ] Submit without college → Should show validation error
- [ ] Submit without year → Should show validation error
- [ ] Submit with ideaTitle → Should combine with idea in database
- [ ] Submit without ideaTitle → Should only store idea in database

