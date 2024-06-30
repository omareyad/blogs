import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      BlogsList: [
        {
            "id": 1,
            "name": "Sample 1",
            "image":"https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "This is sample data #1",
            "time":"00:01:30",
            "added":"Admin"
        },
        {
            "id": 2,
            "name": "Sample 2",
            "image":"https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=3009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "This is sample data #2",
             "time":"00:02:30",
            "added":"Admin"
        },
        {
            "id": 3,
            "name": "Sample 3",
            "image":"https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "This is sample data #3",
             "time":"00:03:30",
            "added":"Admin"
        },
        {
            "id": 4,
            "name": "Sample 4",
            "image":"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "This is sample data #4",
             "time":"00:04:30",
            "added":"Admin"
        },
        {
          "id": 5,
          "name": "Sample 5",
          "image":"https://images.unsplash.com/photo-1700154532236-588ae96c5064?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "description": "This is sample data #5",
           "time":"00:05:30",
          "added":"Admin"
      },
      {
        "id": 6,
        "name": "Sample 6",
        "image":"https://images.unsplash.com/photo-1700154835843-ae5038c7119d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "This is sample data #6",
         "time":"00:06:30",
        "added":"Admin"
    },
    {
      "id": 7,
      "name": "Sample 7",
      "image":"https://images.unsplash.com/photo-1630512633843-043c3c6da96f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "This is sample data #7",
       "time":"00:07:30",
      "added":"Admin"
  }
    ]
    }
  },
  getters: {
    BlogsList: (state) => {
      return state.BlogsList
    },
  },
  mutations: {
    deleteBlog(state, id) {
      // find Blog by id's #
      const index = state.BlogsList
        .map((x) => {
          return x.id
        })
        .indexOf(id);
      // remove Blog #
      state.BlogsList.splice(index, 1)
    },
    addBlog(state, obj) {
      const singleBlog = {
        ...obj // Spread operation Ecma6 #
      }
      // # After fill  object then push in state Vuex BlogList Array #
      state.BlogsList.push(singleBlog)
    },

    editBlog(state, item) {
      const items = state.BlogsList;
      console.log(item)
      var foundIndex = items.findIndex((x) => x.id == item.id)
      items[foundIndex] = item;
    },
  },
})

export default store