import {
  bus
} from '@/event-bus.js';

import Vue from 'vue';
import mapboxgl from 'mapbox-gl';
import LayerControl from './components/LayerControl';
import AnalysisPanel from './components/AnalysisPanel';
import MapLayers from './components/VMapLayers';

export default {
  name: 'app',
  data: function() {
    return {
      map: null,
      drawer: null,
      layers: []
    };
  },
  mounted() {
    this.map = this.$refs.map.map;

    bus.$on('add-data-layer', (data) => {
      console.log(data)
      _.each(this.layers, (layer) => {
        if (layer['dataset'] === data['dataset']) {
          console.log(data['layer'])
          layer.data.push(data['layer'])
        }
      })
    })

    bus.$on('select-layers', (layers) => {
      Vue.set(this, 'layers', layers);
    });

    // Event to add a json containing a mapbox layer to this.layers
    bus.$on('add-layer', (layer) => {
      this.layers.push(layer);
    });

    // Send out map-loaded event when the map is loaded and add controls
    this.map.on('load', (event) => {
      bus.$emit('map-loaded', this.map)
    });
    this.map.on('click', (event) => {
      console.log('layers', this.layers)
    })
  },
  methods: {},
  components: {
    'layer-control': LayerControl,
    'analysis-panel': AnalysisPanel,
    'v-map-layers': MapLayers
  },
};
