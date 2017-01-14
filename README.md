# PostYesBills
This is the PostYesBills code repository as part of DebugPolitics.
Our MVP will consist of ways to:view bills before Congress, from both House and Senate, view a "hot bill" or Call To Action bill, which induces the PYBiller to read, annotate, or comment, view an editorialized summary of a bill.

# Rough Schema

1. First request will be to "/index"

2. JS for React makes request to "/index/bills"
   accept: application/json

3. Returned JSON is array of bill_object_brief

4. bill_object_brief is text + attributes, such as:
 1. title
 2. summary_text
 3. bill_number

5. If/when user clicks on a Bill on the index page, they're taken to the Bill Landing Page with a request of the sort   &lt;/bills/&bill_number>. This returns a bill_object_expanded with text + attributes
 1. title
 2. text
 3. bill_number
 4. sponsor
 5. short_title
 6. date_introduced
 7. date_of_action
 8. annotations: [{}, {}]
 9. comments: [ ]




