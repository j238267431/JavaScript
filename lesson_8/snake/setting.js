class Settings {
   init(params){
      let defaultParams = {rowsCount: 21, colsCount: 21, speed: 10, winLength: 10}
      Object.assign(defaultParams, params)
      
      this.rowsCount = defaultParams.rowsCount
      this.colsCount = defaultParams.colsCount
      this.speed = defaultParams.speed
      this.winLength = defaultParams.winLength
   }

}