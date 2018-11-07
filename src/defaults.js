
import { Units } from 'dayspan';
import * as moment from 'moment';


export default {

  dsCalendar: {
    handleAdd: true,
    handleMove: true
  },

  dsDay: {
    formats: {
      month:  'MMM'
    }
  },

  dsCalendarApp: {
    allowsAddToday: true,
    types: [
      {id: 'D', label: '天', shortcut: 'D', type: Units.DAY,   size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
      {id: 'W', label: '周', shortcut: 'W', type: Units.WEEK,  size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
      {id: 'M', label: '月', shortcut: 'M', type: Units.MONTH, size: 1,  focus: 0.4999, repeat: true,  listTimes: false, updateRows: true,  schedule: false },
      {id: 'Y', label: '年', shortcut: 'Y', type: Units.YEAR,  size: 1,  focus: 0.4999, repeat: true,  listTimes: false, updateRows: true,  schedule: false },
      {id: 'S', label: '日程', shortcut: 'S', type: Units.DAY,   size: 92, focus: 0.0000, repeat: false, listTimes: false, updateRows: false, schedule: true },
      {id: 'X', label: '4 天', shortcut: 'X', type: Units.DAY,   size: 4,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false }
    ],
    formats: {
      today: 'YYYY-MM-DD',
      xs: 'YYYY 年 MM 月 DD 日'
    },
    labels: {
      next: (type) => type ? '下 ' + type.label.toLowerCase() : '下',
      prev: (type) => type ? '上 ' + type.label.toLowerCase() : '上',
      moveCancel: '取消移动',
      moveSingleEvent: '移动日程',
      moveOccurrence: 'Move just this event occurrence',
      moveAll: '移动所有日程',
      moveDuplicate: '增加日程',
      promptConfirm: '是',
      promptCancel: '否',
      today: '今日',
      todayIcon: 'today'
    },
    styles: {
      toolbar: {
        small: { width: 'auto' },
        large: { width: '300px' }
      }
    },
    optionsDialog: {
      maxWidth: '300px',
      persistent: true
    },
    promptDialog: {
      maxWidth: '300px',
      persistent: true
    }
  },

  dsAgenda: {

  },

  dsAgendaDay: {

  },

  dsAgendaEvent: {
    popoverProps: {
      closeOnContentClick: false,
      offsetOverflow: true,
      offsetY: true,
      maxWidth: 500
    },
    formats: {
      firstLine:  'dddd',
      secondLine: 'YYYY-MM-DD',
      start:      'dddd, MMMM D',
      time:       'hh:mm'
    },
    labels: {
      allDay:   '全天',
      options:  '选项',
      close:    '关闭',
      day:      ['day', 'days'],
      days:     ['day', 'days'],
      minute:   ['minute', 'minutes'],
      minutes:  ['minute', 'minutes'],
      hour:     ['hour', 'hours'],
      hours:    ['hour', 'hours'],
      week:     ['week', 'weeks'],
      weeks:    ['week', 'weeks'],
      busy:     'Busy',
      free:     'Free'
    }
  },

  dsCalendarEvent: {
    index: 0,
    popoverProps: {
      nudgeWidth: 200,
      closeOnContentClick: false,
      offsetOverflow: true,
      offsetX: true,
      maxWidth: 500
    }
  },

  dsCalendarEventChip: {
    canExclude: true,
    colors: {
      sameForeground:   'white',
      sameBackground:   'primary'
    },
    formats: {
      fullDay:          'ddd MMM Do YYYY',
      timed:            'ddd MMM Do YYYY'
    }
  },

  dsCalendarEventPopover: {
    formats: {
      start:    'dddd, MMMM D',
      time:     'h:mm a'
    },
    labels: {
      allDay:   '全天',
      options:  '选项',
      close:    '关闭',
      day:      ['day', 'days'],
      days:     ['day', 'days'],
      minute:   ['minute', 'minutes'],
      minutes:  ['minute', 'minutes'],
      hour:     ['hour', 'hours'],
      hours:    ['hour', 'hours'],
      week:     ['week', 'weeks'],
      weeks:    ['week', 'weeks'],
      busy:     '忙',
      free:     '空闲'
    }
  },

  dsCalendarEventCreatePopover: {
    prompts: {
      description:  true,
      color:        true,
      location:     true,
      calendar:     true,
      busy:         true,
      icon:         true,
      guests:       false
    },
    formats: {
      start:    'dddd, MMMM D',
      time:     'h:mm a'
    },
    icons: {
      save:     '保存',
      close:    '关闭',
      edit:     '编辑'
    },
    labels: {
      title:    '增加标题',
      allDay:   '全天',
      close:    '关闭',
      save:     '保存',
      day:      ['day', 'days'],
      days:     ['day', 'days'],
      minute:   ['minute', 'minutes'],
      minutes:  ['minute', 'minutes'],
      hour:     ['hour', 'hours'],
      hours:    ['hour', 'hours'],
      week:     ['week', 'weeks'],
      weeks:    ['week', 'weeks'],
      busy:     'Busy',
      free:     'Free',
      location: '增加地址',
      description: '描述',
      calendar: '日程',
    },
    busyOptions: [
      {value: true, text: 'Busy'},
      {value: false, text: 'Free'}
    ]
  },

  dsCalendarEventPlaceholder: {
    popoverProps: {
      nudgeWidth: 200,
      closeOnContentClick: false,
      closeOnClick: true,
      offsetOverflow: true,
      offsetX: true,
      maxWidth: 500
    }
  },

  dsCalendarEventTimePlaceholder: {
    popoverProps: {
      nudgeWidth: 200,
      closeOnContentClick: false,
      closeOnClick: true,
      offsetOverflow: true,
      offsetX: true,
      maxWidth: 500
    }
  },

  dsCalendarEventTime: {
    placeholderStyle: false,
    disabled: false,
    popoverProps: {
      nudgeWidth: 200,
      closeOnContentClick: false,
      offsetOverflow: true,
      offsetX: true,
      maxWidth: 500
    }
  },

  dsIdentifierChip: {
    description: '',
    short: true,
    canRemove: true
  },

  dsSchedule: {
    allowsRange: true,
    labels: {
      editCustom:   '自定义'
    }
  },

  dsEvent: {
    hasTitle: true,
    hasCancel: true,
    hasSave: true,
    canSave: true,
    hasTabs: true,
    hasDetails: true,
    hasForecast: true,
    hasExclusions: true,
    hasInclusions: true,
    hasCancelled: true,
    labels: {
      cancel:       '取消',
      save:         '保存',
      title:        '标题',
      exclusions:   'These are events or spans of time where a normally occurring event was excluded from the schedule. Events are excluded here if an event occurrence is moved.',
      inclusions:   'These are events or spans of time where events were added outside the normally occurring schedule. Events are added here if an event occurrence is moved.',
      cancelled:    'These are events or spans of time where events were cancelled.',
      edit:         '编辑事件',
      add:          '增加事件',
      location:     '输入地址',
      description:  '输入描述',
      calendar:     '日程',
      tabs: {
        details:    '日程详情',
        forecast:   '预测',
        removed:    '已移除',
        added:      '已增加',
        cancelled:  '已取消'
      }
    },
    busyOptions: [
      {value: true, text: 'Busy'},
      {value: false, text: 'Free'}
    ]
  },

  dsScheduleActions: {
    allowRemove: true,
    allowExclude: true,
    allowCancel: true,
    allowUncancel: true,
    allowMove: true,
    allowInclude: true,
    allowSetStart: true,
    allowSetEnd: true,
    labels: {
      remove:     '移除此日程',
      exclude:    '移除当前事件',
      cancel:     '取消当前事件',
      uncancel:   'Undo cancellation',
      move:       '移动此事件',
      include:    '增加新事件',
      setStart:   '设为第一个事件',
      setEnd:     '设为最后一个事件'
    }
  },

  dsEventDialog: {
    dialogProps: {
      persistent: true,
      lazy: true,
      maxWidth: '800px'
    }
  },

  dsScheduleForecast: {
    canExclude: true,
    hasDescription: true,
    defaultSize: 5,
    sizeMax: 100,
    labels: {
      prefix:     'The forecast shows previous & next',
      suffix:     'event occurrences within a years time.'
    }
  },

  dsScheduleFrequencyDay: {
    options: [
      { text: 'Any day', value: 'any'},
      { text: 'On the following days...', value: 'oneof'},
      { text: 'Every _ days starting on _', value: 'every'}
    ],
    types: [
      { text: 'Day of the month', property: 'dayOfMonth', max: 32, min: 1 },
      { text: 'Last day of the month', property: 'lastDayOfMonth', max: 32, min: 1 },
      { text: 'Day of the year', property: 'dayOfYear', max: 367, min: 1, offset: -1 }
    ]
  },

  dsScheduleFrequencyDayOfWeek: {
    options: [
      { text: 'Any day of the week', value: 'any'},
      { text: 'On the following days of the week...', value: 'oneof'},
      { text: 'Every _ weekday starting on _', value: 'every'},
      { text: 'Weekends', value: 'weekend'},
      { text: 'Weekdays', value: 'weekday'}
    ]
  },

  dsScheduleFrequencyMonth: {
    options: [
      { text: 'Any month', value: 'any'},
      { text: 'On the following months...', value: 'oneof'},
      { text: 'Every _ months starting on _', value: 'every'}
    ]
  },

  dsScheduleFrequencyWeek: {
    options: [
      { text: 'Any week', value: 'any'},
      { text: 'On the following weeks...', value: 'oneof'},
      { text: 'Every _ weeks starting on _', value: 'every'}
    ],
    types: [
      { text: 'Week of the month (first week has a Thursday)', property: 'weekOfMonth', max: 6 },
      { text: 'Weekspan of the month (starts on first day of month)', property: 'weekspanOfMonth', max: 7, min: 1, offset: -1 },
      { text: 'Full week of the month (0th = the week before if any)', property: 'fullWeekOfMonth', max: 6 },
      { text: 'Last weekspan of the month (starts on last day of month)', property: 'lastWeekspanOfMonth', max: 7, min: 1, offset: -1 },
      { text: 'Last full week of the month (0th = the week after if any)', property: 'lastFullWeekOfMonth', max: 6 },
      { text: 'Week of the year (first week has a Thursday)', property: 'weekOfYear', max: 54 },
      { text: 'Weekspan of the year (starts on first day of year)', property: 'weekspanOfYear', max: 53, min: 1, offset: -1 },
      { text: 'Full week of the year (0th = the week before if any)', property: 'fullWeekOfYear', max: 54 },
      { text: 'Last weekspan of the year (starts on last day of year)', property: 'lastWeekspanOfYear', max: 53, min: 1, offset: -1 },
      { text: 'Last full week of the year (0th = the week after if any)', property: 'lastFullWeekOfYear', max: 54 }
    ]
  },

  dsScheduleFrequencyYear: {
    lookback: 5,
    lookahead: 20,
    options: [
      { text: 'Any year', value: 'any'},
      { text: 'On the following years...', value: 'oneof'},
      { text: 'Every _ years starting on _', value: 'every'}
    ]
  },

  dsScheduleModifier: {
    canRemove: true,
    description: ''
  },

  dsScheduleSpan: {
    labels: {
      startless:  '开始时间',
      endless:    '结束时间'
    },
    formats: {
      start:      'MMMM Do, YYYY',
      end:        'MMMM Do, YYYY'
    }
  },

  dsScheduleTime: {
    index: -1,
    mutate: true,
    showAdd: false,
    showRemove: false,
    labels: {
      remove:     'Remove time',
      add:        'Add time'
    },
    colors: {
      add:        'secondary',
      remove:     'secondary'
    },
    icons: {
      add:        'add',
      remove:     'remove'
    }
  },

  dsScheduleTimes: {
    defaultTime: '08:00',
    labels: {
      all:        'All day',
      minute:     'minute',
      minutes:    'minutes',
      hour:       'hour',
      hours:      'hours',
      day:        'day',
      days:       'days',
      week:       'week',
      weeks:      'weeks',
      month:      'month',
      months:     'months'
    }
  },

  dsScheduleType: {
    formats: {
      date:       'LL'
    }
  },

  dsScheduleTypeCustomDialog: {
    dialogProps: {
      maxWidth: '600px',
      persistent: true,
      lazy: true
    },
    labels: {
      save:     'Save',
      cancel:   'Cancel'
    }
  },

  dsWeekDayHeader: {
    formats: {
      weekday:    'ddd'
    }
  },

  dsWeeksView: {
    weekdays: moment.weekdaysShort()
  },

  dsDaysView: {
    scrollToFirst: true,
    scrollBuffer: 60
  },

  dsGestures: {
    minDistance: 50,
    maxDistance: 200,
    maxWander: 0.1
  }

};
