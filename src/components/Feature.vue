<template>
  <div class="col-lg-6 col-md-6">
    <div class="single-feature">
      <div class="feature-icon">
        <img :src="featureData.icon" alt="" />
      </div>
      <div class="feature-content">
        <h4>{{ featureData.headline }}</h4>
        <p>{{ featureData.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['featureData'],
}
</script>
