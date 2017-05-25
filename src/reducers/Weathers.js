export default function WeatherReducer(state, action) {
  if (!state) {
    return state = {
      weathers: [
        {
          city: "株洲",
          details: [
            {
              date:"25日星期四",fengli: "微风级",fengxiang: "北风",high: "高温 28℃",low: "低温 15℃",type: "晴"
            },
            {
              date:"25日星期四",fengli: "微风级",fengxiang: "北风",high: "高温 28℃",low: "低温 15℃",type: "晴"
            }
          ],
          wendu: "25"
        }
      ]
    }
  }
  switch (action.type) {
    case "ADD_NEWCITY_WEATHER":
      return {
        weathers: [action.weather]
      }
    case "INIT_WEATHER":
      return {
        weathers: [action.weather]
      }
    default:
      return state
  }
}
export const addWeather = (weather) => {
  return {type: "ADD_NEWCITY_WEATHER", weather}
}
export const initWeather = (weather) => {
  return {type: "INIT_WEATHER", weather}
}
