#!/usr/bin/python3
import flask
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///postyesbills'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Name %r>' % self.name

class Bill(db.Model):
    __tablename__ ="bills"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    text = db.Column(db.Text)
    bill_number = db.Column(db.Integer)
    sponsor = db.Column(db.String)
    short_title = db.Column(db.String)
    date_introduced = db.Column(db.Date)
    date_of_action = db.Column(db.Date)
    annotations = db.relationship("Annotation",backref="bills")
    comments = db.relationship("Comment",backref="bills")
    editorial = db.Column(db.Text)

    def __init__(self,title,text,bill_number,sponsor,short_title,date_introduced, date_of_action, annotations,comments,editorial):
        self.title = title
        self.text = text
        self.bill_number = bill_number
        self.sponsor = sponsor
        self.short_title = short_title
        self.date_introduced = date_introduced
        self.date_of_action = date_of_action
        self.annotations = annotations
        self.comments = comments
        self.editorial = editorial

class Annotation(db.Model):
    __tablename__ ="annotations"
    id = db.Column(db.Integer, primary_key=True)
    start_index = db.Column(db.Integer)
    end_index = db.Column(db.Integer)
    bill_id = db.Column(db.Integer, db.ForeignKey("bills.id"))
    content = db.Column(db.Text)
    comments = db.relationship("Comment")

    def __init__(self, start_index, end_index, bill_id, content, comments):
        self.start_index = start_index
        self.end_index = end_index
        self.bill_id = bill_id
        self.content = content
        self.comments = comments

class Comment(db.Model):
    __tablename__ ="comments"
    id = db.Column(db.Integer, primary_key=True)
    bill_id = db.Column(db.Integer,db.ForeignKey('bills.id'))
    annotation_id = db.Column(db.Integer,db.ForeignKey('annotations.id'))
    content = db.Column(db.Text)

    def  __init__(self,bill_id,annotation_id,content):
        self.bill_id = bill_id
        self.annotation_id = annotation_id
        self.content = content
