const App = {
    data() {
      return {
        airports: [],
        shownAirport: [],
        airportList: ['RCFN', 'RCTP', 'RCKH', 'RCSS', 'RCBS', 'RCKU', 'RCMQ', 'RCMT', 'RCNN', 'RCQC', 'RCYU', 'RCCM', 'RCFG', 'RCGI', 'RCKW', 'RCLY', 'RCWA', 'RCSP', 'RCDC'],
        isCollapse: true
      }
    },
    methods: {
      fetchData () {
        fetch('https://ptx.transportdata.tw/MOTC/v2/Air/METAR/Airport?$top=30&$format=JSON')
          .then(res => {
            if (res.ok) {
              return res.json()
            }
            throw new Error('Get data error');
          }).then(data => {
            for (i in this.airportList) {
              let d = this.getAirportDataById(this.airportList[i], data);
              if (d) {
                this.airports.push(d);
              }
            }
          })
          .catch(err => {
            console.log(err)
            alert('API error')
          })
      },
      setShownAirport (event) {
        this.shownAirport = this.airports.filter(airport => airport.StationID == event.target.getAttribute('airportid'))[0];
        this.setCollapse();
      },
      setCollapse () {
        this.isCollapse = ! this.isCollapse;
      },
      getAirportDataById (id, data) {
        fData = data.filter(airport => airport.StationID == id)
        return fData.length > 0 ? fData[0] : undefined
      }
    },
    mounted() {
      this.fetchData()
    }
  };

  const vm = Vue.createApp(App).mount('#app');