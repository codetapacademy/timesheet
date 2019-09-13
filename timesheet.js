const weekDayList = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

document.body.style.margin = '0'

const wrapper = document.createElement('div')
wrapper.style.display = 'inline-grid'
wrapper.style.gridTemplateColumns = '100px 1fr 100px'

const weekDayListContainer = weekDayList
  .map(
    day => {
      const weekDayItem = document.createElement('div')
      weekDayItem.innerText = day
      wrapper.appendChild(weekDayItem)

      const weekDayInput = document.createElement('input')
      wrapper.appendChild(weekDayInput)

      const addWeekButton = document.createElement('button')
      wrapper.appendChild(addWeekButton)
      addWeekButton.innerText = 'save'

      return weekDayItem
    }
  )
document.body.appendChild(wrapper)

console.log(
  weekDayListContainer
)