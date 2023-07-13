<template>
  <h2>App Developer</h2>
  <svg class="map" ref="appDevSVGRef"></svg>

  <h2>Core Developer</h2>
  <svg class="map" ref="coreDevRef"></svg>

  <h2>Ecosystem</h2>
  <h2>Defi</h2>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import { APP_DEV_MAP_DATA } from './data/appdev';
import { CORE_DEV_MAP_DATA } from './data/coredev'


const transformer = new Transformer();

const appDevSVGRef = ref();
const appDevValue = ref(APP_DEV_MAP_DATA);

const coreDevRef = ref();
const coreDevValue = ref(CORE_DEV_MAP_DATA);

let appDevMarkmap;
let coreDevMarkmap;

onMounted(() => {
  appDevMarkmap = Markmap.create(appDevSVGRef.value);
  coreDevMarkmap = Markmap.create(coreDevRef.value);
  update();
});

const update = () => {
  const appDevResult = transformer.transform(appDevValue.value);
  appDevMarkmap.setData(appDevResult.root);
  appDevMarkmap.fit();

  const coreDevResult = transformer.transform(coreDevValue.value);
  console.log(coreDevResult.root);
  coreDevMarkmap.setData(coreDevResult.root);
  coreDevMarkmap.fit();
};

onUpdated(update);

</script>

<style scoped>
    .map {
        width: 80%;
        height: 600px;
    }
</style>
