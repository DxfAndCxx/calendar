<template>
  <div id="app">
    <el-container style="height: 100vh;">
      <el-aside class='left-side'>
        <el-date-picker
          class='c-date-picker'
          v-model="week_day"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周"
          @change="dateChangeHandle">
        </el-date-picker>
      </el-aside>

      <el-main class='mian'>
        <el-table
          class='c-table'
          :data="tableDatas"
          border
          height="100%"
          style="width: 100%"
          @cell-click='tdClickHandle'>

          <el-table-column v-for="column in columns"
            :key="column.prop"
            :prop="column.prop"
            :fixed = "column.fixed"
            :label="column.label"
            :width="column.width">
            <template slot-scope="scope">
              <div v-if="column.prop !== 'time'">
              </div>
              <div v-else>{{scope.row.time}}</div>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <el-dialog
      title="新建日程"
      :visible.sync="dialogVisible"
      width="50%">

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="日程时间">
          {{form.beginTime}} -- {{form.endTime}}
        </el-form-item>

        <el-form-item label="日程主题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="日程描述">
          <el-input type="textarea" v-model="form.desc" :rows='4'></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import { weekdays , dateFormat} from '~/utils/date'

const weekDict = {
  '0': '周日',
  '1': '周一',
  '2': '周二',
  '3': '周三',
  '4': '周四',
  '5': '周五',
  '6': '周六',
};


export default {
  name: 'app',
  data() {
    return {
      week_day: new Date(),
      tableDatas: [],
      columns: [],
      createSchedule: '新建日程',
      dialogVisible:false,
      form: {
        beginTime: null,
        endTime: null,
        name: null,
        desc: null,
      }
    };
  },
  created(){
    this.loadDatas(this.week_day);
  },
  methods: {
    dateChangeHandle(value){
     this.loadDatas(value);
    },
    getDateHeaders(dates){
      let headers = [{
        'prop': 'time',
        'fixed': true,
        'label': '',
        'width': '60',
      }, ];
      for (let dd of dates) {
        let dateObject = dd.obj;
        let prop = dateFormat(dateObject, 'yyyy-MM-dd');
        headers.push({
          'prop': prop,
          'label': dateFormat(dateObject, 'MM/dd ' + weekDict[dd.week]),
        })
      }
      return headers;
    },
    loadDatas(date) {
      let dates = weekdays(date);
      this.columns = this.getDateHeaders(dates);
      this.tableDatas = this.getTableDatas(dates);

    },
    getTableDatas(dates){
      let datas = [];
      for (let i=0;i<24;i++){
        let row = {
          'time': i+'时',
          'timeValue': i,
        };
        for (let dd of dates){
          let dateObject = dd.obj;
          let prop = dateFormat(dateObject, 'yyyy-MM-dd');
          row[prop] = '';
        }
        datas.push(row);
      }
      return datas;
    },
    tdClickHandle(row, column, cell, event){
      let date = column.property;
      let time = row.timeValue;
      if (date === 'time') return;
      let end = time + 1;
      if (time < 10) {
        time = '0'+ time;
      }
      if (end < 10) {
        end = '0' + end;
      }
      this.form = {
        'beginTime': `${date} ${time}:00`,
        'endTime': `${date} ${end}:00`
      }
      this.dialogVisible = true;
    }
  },
}
</script>


<style>
.left-side{
  width: 260px !important;
  background-color: #343740;
  color: #fff;
}
.mian{
  padding: 0px;
}
.c-date-picker{
  width:  100% !important;
}
.c-date-picker .el-input__inner{
  border-radius: 0px;
}
tr.el-table__row td{
  cursor: pointer;
}
tr.el-table__row td:first-child{
  cursor: default;
}
.c-table .el-table__body td.hover-row>td{
  background-color: #fff !important;
}
</style>
