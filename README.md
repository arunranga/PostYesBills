# PostYesBills
This is the PostYesBills code repository as part of DebugPolitics.
Our MVP will consist of ways to:view bills before Congress, from both House and Senate, view a "hot bill" or Call To Action bill, which induces the PYBiller to read, annotate, or comment, view an editorialized summary of a bill.

# Rough Schema

1. First request will be to "/index"

2. HTML page for layout here

3. HTML page contains two requests as actions / REDUX
 1. Returned JSON is array of bill_object_brief
 2. Returned JSON is a singleton called hot_bill

4. bill_object_brief is text + attributes, such as:
 1. title
 2. summary_text
 3. bill_number
 4. number_comments
 5. number_annotations

5. hot_bill is 
 1. title
 2. summary_text
 3. bill_number
 4. number_comments
 5. number_annotations
 6. editorial

5. If/when user clicks on a Bill on the index page, they're taken to the Bill Landing Page with a request of the sort   &lt;/bills/&bill_number>. This returns a bill_object_expanded with text + attributes
 1. title
 2. text
 3. bill_number 
 4. sponsor-name
 5. short_title
 6. date_introduced
 7. date_of_action
 8. annotations: [{}, {}]
 9. comments: [ ]
 10. editorial




