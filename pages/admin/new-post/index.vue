<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostFrom />
    </section>
  </div>
</template>
<script>
import AdminPostFrom from '@/components/Admin/AdminPostFrom'
export default {
  layout: 'admin',
  components: {
    AdminPostFrom
  }
}
</script>

<style scoped>
.new-post-form{
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
