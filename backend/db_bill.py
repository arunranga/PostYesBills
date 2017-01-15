#!/usr/bin/python3.5

# Import Dependenies
import os
# import sqlalchemy
import sys
import xml.etree.ElementTree as ET
# import xml.sax
# import xml.sax.ContentHandler 

# Number arguments
print(str(len(sys.argv)))

# Argument list
print(str(sys.argv))

# class BillHandler(ContentHandler):
# 	def __init__(self):
# 		self.CurrentData = ""
# 		self.type = ""
# 		self.format = ""
# 		self.year = ""
# 		self.rating = ""
# 		self.stars = ""
# 		self.description = ""
# 	# Call when an element starts
#    def startElement(self, tag, attributes):
#       self.CurrentData = tag
#       if tag == "billStatus":
#          print ("*****Bill*****")
#          title = attributes["title"]
#          print ("Title:", title)
#    # Call when an elements ends
# def endElement(self, tag):
# if self.CurrentData == "type":
# print ("Type:", self.type)
# elif self.CurrentData == "format":
# print ("Format:", self.format)
# elif self.CurrentData == "year":
# print ("Year:", self.year)
# elif self.CurrentData == "rating":
# print ("Rating:", self.rating)
# elif self.CurrentData == "stars":
# print ("Stars:", self.stars)
# elif self.CurrentData == "description":
# print ("Description:", self.description)
# self.CurrentData = ""
# 	# Call when a character is read
# 	def characters(self, content):
# 		if self.CurrentData == "type":
# 		self.type = content
# 		elif self.CurrentData == "format":
# 		self.format = content
# 		elif self.CurrentData == "year":
# 		self.year = content
# 		elif self.CurrentData == "rating":
# 		self.rating = content
# 		elif self.CurrentData == "stars":
# 		self.stars = content
# 		elif self.CurrentData == "description":
# 		self.description = content
def get_summary(summaries=None):
        recent_summary = {}
        fields = ['name', 'text', 'actionDate']
        if (summaries != None):
                for item in summaries.iterfind('item'):
                        curr_summary = {}
                        for f in fields:
                                curr_field = item.find(f)
                                if (curr_field != None):
                                        curr_field = curr_field.text
                                        curr_summary[f] = curr_field
        return recent_summary

def get_sponsors(sponsor_lst=None):
        lst = []
        if (sponsor_lst != None):
                for item in sponsor_lst.iterfind('item'):
                        name = item.find('fullName')
                        if (name != None):
                                name = name.text
                                if (name != ''):
                                        lst.append(name)
        return lst

def get_cosponsors(cosponsor_list=None):
        lst = []
        if (cosponsor_list != None):
                for item in cosponsor_list.iterfind('item'):
                        name = item.find('fullName')
                        if (name != None):
                                name = name.text
                                if (name != ''):
                                        lst.append(name)
        return lst

def get_policies(policy=None):
        lst = []
        if (policy != None):
                for item in policy.iterfind('name'):
                        name = item.text
                        if (name != ''):
                                lst.append(name)
        return lst

def get_title(titles=None):
        dispTitle = None
        if (titles != None):
                for item in titles.iterfind('item'):
                        # Only grab displayTitle
                        itemType = item.find('titleType')
                        if (itemType != None):
                                itemType = itemType.text
                                if (itemType.lower() == 'display title'):
                                        title = item.find('title')
                                        if (title != None):
                                                dispTitle = title.text
        return dispTitle

def get_billType(bType=None):
        billType = None
        if (bType != None):
                billType = bType.text
        return billType

def get_billNumber(bNum=None):
        billNum = None
        if (bNum != None):
                billNum = bNum.text
        return billNum

def get_billTitle(bTitle=None):
        billTitle = None
        if (bTitle != None):
                billTitle = bTitle.text
        return billTitle

def get_createDate(bDate=None):
        billCreateDate = None
        if (bDate != None):
                billCreateDate = bDate.text
        return billCreateDate

def main(dept='', bill=''):
        dept = str(dept)
        bill_id = str(bill)
        root = None
        sponsors = None
        billType = None
        billNumber = None
        billTitle = None
        createDate = None
        cosponsors = None
        policyArea = None
        title = None
        summary = None
        try:
                fileName = '/home/ubuntu/congress/data/115/bills/' + dept + '/' + dept + bill_id + '/fdsys_billstatus.xml'
                tree = ET.parse(fileName)
                root = tree.getroot()
        except (FileNotFoundError):
                print("This file does not exist")
                return
        # Get all important info
        bill = root.find('bill')
        if (bill != None):
                # Get sponsors
                sponsors = get_sponsors(bill.find('sponsors'))
                billType = get_billType(bill.find('billType'))
                # committees = get_committees(bill.find('committees'))
                billNumber = get_billNumber(bill.find('billNumber'))
                billTitle = get_billTitle(bill.find('title'))
                createDate = get_createDate(bill.find('introducedDate'))
                cosponsors = get_cosponsors(bill.find('cosponsors'))
                policyArea = get_policies(bill.find('policyArea'))
                title = get_title(bill.find('titles'))
                # Get Object Summary
                summary = get_summary(bill.find('summaries'))
                # Check which fields are missing
                if (summary.get('title', '') == ''):
                        summary['title'] = title
                # if (summary.get('description') == ''):
                if (summary.get('billNum') == None):
                        summary['billNum'] = billNumber
                if (summary.get('numComments') == None):
                        summary['numComments'] = 0
                if (summary.get('numAnnotations') == None):
                        summary['numAnnotations'] = 0
                # Get raw text
        f = None
        try:
                f = open('/home/ubuntu/congress/data/115/bills/' + dept + '/' + dept + bill_id + '/text-versions/i' + dept + '/document.txt')
        except (FileNotFoundError):
                print("This file does not exist")
                return
        bill_text = f.read()
        ### TESTING ###
        print('Sponsors:')
        print(sponsors)
        print()
        print('Bill Type:')
        print(billType)
        print()
        print('Bill Number:')
        print(billNumber)
        print()
        print('Create Date:')
        print(createDate)
        print()
        print('Co-Sponsors:')
        print(cosponsors)
        print()
        print('Policy Area:')
        print(policyArea)
        print()
        print('Title:')
        print(title)
        print()
        print('Summary:')
        for key, val in summary.items():
                print(str(key) + ": " + str(val))
        print()
        print("Text:")
        print(bill_text)
        print()
                # Log into DB

if __name__ == '__main__':
        # Check cmd arguments
        if (len(sys.argv) == 3):
                sys.argv[0] = str(sys.argv[1]).split('=')
                sys.argv[1] = str(sys.argv[2]).split('=')
                dept_name = None
                bill_num = None
                for arg in sys.argv:
                        if (arg[0] == 'dept'):
                                dept_name = str(arg[1]).lower()
                        elif (arg[0] == 'bill'):
                                bill_num = int(arg[1])
                print(sys.argv)
                print(dept_name)
                print(bill_num)
                if (dept_name != None and bill_num != None):
                        main(dept_name, bill_num)
                else:
                        print("Bad format: python3 db_bill.py dept=<hr/s> bill=<0-1000>")
                        print("Example: python3 db_bill.py dept=s bill=11")
