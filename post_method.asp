dim first_name,city
first_name = Request.Form("name")
city = Request.Form("city")
Response.Write("Dear " & first_name & ". ")
Response.Write("Hope you live well in " & city & ".")