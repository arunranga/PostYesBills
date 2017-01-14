# PostYesBills
This is the PostYesBills code repository as part of DebugPolitics.
Our MVP will consist of ways to:view bills before Congress, from both House and Senate, view a "hot bill" or Call To Action bill, which induces the PYBiller to read, annotate, or comment, view an editorialized summary of a bill.

# Rough Schema

1. First request will be to "/index"

2. JS for React makes request to "/index/bills"
   accept: application/json

3. Returned JSON is array of "Bill" objects ("Bill")

4. Bill object is text + attributes, such as:
 1. title
 2. text
 3. bill_number
 4. sponsor
 5. short_title
 6. date_introduced
 7. date_of_action
 8. annotations: [{}, {}]
 9. comments: [ ]

5. Click on a landing page on a bill, then 
   /bills/&lt;id:of_article>

6. JS for React makes request for text



