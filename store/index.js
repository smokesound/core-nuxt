import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id: '1',
                  previewText:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem provident mollitia corrupti commodi reprehenderit ipsam atque ratione at! Deleniti eligendi similique iste ipsam aliquam quis aliquid ad sunt, a velit doloribus voluptas, numquam voluptatibus porro repudiandae! Corrupti deleniti debitis odit ratione, labore id: Deserunt eius at minus? Atque, repellendus?',
                  title: 'First Preview',
                  thumbnail:
                    ' http://itechfuture.com/wp-content/uploads/2014/08/Future-technology-Google-Nexus-360-is-a-Smartphone-or-Smartwatch.jpg'
                },
                {
                  id: '2',
                  previewText:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem provident mollitia corrupti commodi reprehenderit ipsam atque ratione at! Deleniti eligendi similique iste ipsam aliquam quis aliquid ad sunt, a velit doloribus voluptas, numquam voluptatibus porro repudiandae! Corrupti deleniti debitis odit ratione, labore id: Deserunt eius at minus? Atque, repellendus?',
                  title: 'Second Preview',
                  thumbnail:
                    'https://media-cdn.tripadvisor.com/media/photo-s/10/50/53/19/eua.jpg'
                },
                {
                  id: '3',
                  previewText:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem provident mollitia corrupti commodi reprehenderit ipsam atque ratione at! Deleniti eligendi similique iste ipsam aliquam quis aliquid ad sunt, a velit doloribus voluptas, numquam voluptatibus porro repudiandae! Corrupti deleniti debitis odit ratione, labore id: Deserunt eius at minus? Atque, repellendus?',
                  title: 'Third Preview',
                  thumbnail:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv62yTcP5eYIR2dgfJ-l8DYS0cZobKX_K63dIRwD08lOtpYew6sw'
                }
              ]
            )
            resolve()
          }, 1500)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}
export default createStore