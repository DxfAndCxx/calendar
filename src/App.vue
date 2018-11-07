<template>
  <v-app id="dayspan" v-cloak>

    <ds-calendar-app ref="app"
      :calendar="calendar"
      @change="saveState">

      <template slot="title">
        日程
      </template>

      <template slot="menuRight">
        用户信息
        <!-- 右侧目录，显示用户信息 -->
      </template>

      <template slot="eventPopover" slot-scope="slotData">
         <ds-calendar-event-popover
          v-bind="slotData"
          @finish="saveState"
        ></ds-calendar-event-popover>
      </template>

      <template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">
        <ds-calendar-event-create-popover
          :calendar-event="placeholder"
          :calendar="calendar"
          :close="$refs.app.$refs.calendar.clearPlaceholder"
          @create-edit="$refs.app.editPlaceholder"
          @create-popover-closed="saveState"
        ></ds-calendar-event-create-popover>
      </template>

      <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
        <div>
          <v-icon class="ds-ev-icon"
            v-if="details.icon"
            size="14"
            :style="{color: details.forecolor}">
            {{ details.icon }}
          </v-icon>
          <strong class="ds-ev-title">{{ details.title }}</strong>
        </div>
        <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
      </template>

    </ds-calendar-app>

  </v-app>
</template>

<script>
import { dsMerge } from './functions';
import { Calendar, Weekday, Month, Sorts } from 'dayspan';


export default {
  name: 'calendar',

  data: vm => ({
    storeKey: 'dayspanState',
    calendar: Calendar.months(),

    // 任务列表
    defaultEvents: [
      {
        data: {
          title: 'Weekly Meeting',
          color: '#3F51B5'
        },
        schedule: {
          dayOfWeek: [Weekday.MONDAY],
          times: [20],
          duration: 30,
          durationUnit: 'minutes'
        }
      }
    ]
  }),

  mounted()
  {
    window.app = this.$refs.app;

    this.loadState();
  },

  methods:
  {
    getCalendarTime(calendarEvent)
    {
      let sa = calendarEvent.start.format('a');
      let ea = calendarEvent.end.format('a');
      let sh = calendarEvent.start.format('h');
      let eh = calendarEvent.end.format('h');

      if (calendarEvent.start.minute !== 0)
      {
        sh += calendarEvent.start.format(':mm');
      }

      if (calendarEvent.end.minute !== 0)
      {
        eh += calendarEvent.end.format(':mm');
      }

      return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);
    },

    saveState()
    {
      let state = this.calendar.toInput(true);
      let json = JSON.stringify(state);

      //  TODO: 保存任务
      localStorage.setItem(this.storeKey, json);
    },

    loadState()
    {
      let state = {};

      // 加载任务
      try
      {
        let savedState = JSON.parse(localStorage.getItem(this.storeKey));

        if (savedState)
        {
          state = savedState;
          state.preferToday = false;
        }
      }
      catch (e)
      {
        console.log( e );
      }

      if (!state.events || !state.events.length)
      {
        state.events = this.defaultEvents;
      }

      let defaults = this.$dayspan.getDefaultEventDetails();

      state.events.forEach(ev =>
      {
        ev.data = dsMerge( ev.data, defaults );
      });

      console.log(state);
      this.$refs.app.setState( state );
    }
  }
}
</script>

<style>

body, html, #app {
  width: 100%;
  height: 100%;
}

</style>
