<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last Updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written By {{ loadedPost.author}}</div>
      </div>
      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know, send mail to <a href="mailto.gilang@tirto.id">Gilang Daniel</a></p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          previewText:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem provident mollitia corrupti commodi reprehenderit ipsam atque ratione at! Deleniti eligendi similique iste ipsam aliquam quis aliquid ad sunt, a velit doloribus voluptas, numquam voluptatibus porro repudiandae! Corrupti deleniti debitis odit ratione, labore id: Deserunt eius at minus? Atque, repellendus?',
          title: 'First Preview (ID: ' + context.route.params.id + ')',
          author: 'Gilang',
          updatedDate: new Date(),
          content: 'some dummy text',
          thumbnail:' http://itechfuture.com/wp-content/uploads/2014/08/Future-technology-Google-Nexus-360-is-a-Smartphone-or-Smartwatch.jpg'
        },
      });
    },1000)
  }
}
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
