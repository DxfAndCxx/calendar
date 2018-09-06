#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import datetime

from sqlalchemy import Column, String, create_engine, Integer, TIMESTAMP, func, Float, desc
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from flask import Flask, render_template, request
from flask_script import Manager

# 创建对象的基类:
Base = declarative_base()

app = Flask(__name__)
manager = Manager(app)

class Schedule(Base):
    __tablename__ = 'schedule'

    id = Column(Integer, primary_key=True)
    userid = Column(String(1024))
    name = Column(String(1024))
    start_time = Column(TIMESTAMP)
    end_time = Column(TIMESTAMP)
    desc = Column(String(1024))

    gmt_create = Column(TIMESTAMP, default=datetime.datetime.now)
    gmt_modify = Column(TIMESTAMP, default=datetime.datetime.now, onupdate=datetime.datetime.now)

engine = create_engine('mysql+pymysql://root:123456@127.0.0.1:3306/calendar?charset=utf8')
DBSession = sessionmaker(bind=engine)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api')
def data():
    pass

@manager.command
def run():
    app.run(host='0.0.0.0', port=8080, threaded=True, debug=True)


@manager.command
def initdb():
    Base.metadata.create_all(engine)


if __name__ == '__main__':
    manager.run()
