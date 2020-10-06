# Prompt 1.1: Find the ids of all documents which do not have any pages.
empty_document_ids = Document.includes(:pages).where(:pages => {id: nil}).map{|document| document.id}


# Prompt 1.2: Return a list of report titles and the total number of pages in the report. 
#             Reports which do not have pages may be ignored.
report_titles_and_page_counts = Page.group(:title).joins(document: :report).distinct.count.map{|k, v| {report_title: k, page_count: v}}


# Prompt 1.3: How would you determine the percentage of document pages which include a footnote?
sql = "SELECT document_id, COUNT(CASE WHEN footnote IS NOT NULL THEN 1 ELSE NULL END)/COUNT(*) AS percent_with_footnotes
       FROM pages
       GROUP BY document_id"


# Prompt 1.4: How would you search the body of a page to look for a specific search string? 
#             Any approach is welcome, though you may only use native methods, 
#             not gems or other libraries.
def find_page_containing(string)
  Page.where('body LIKE ?', "%#{string}%")
end
