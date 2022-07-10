let renderEntireTree = () => {
   console.log('State changed')
}

export type MessageType = {
   id: string
   message: string
}

export type DialogType = {
   id: string
   name: string
}

export type DialogItemType = {
   name: string,
   id: string
}

export type PostType = {
   id: number
   message: string
   likecount: string
}

export type ProfilePageType = {
   newPostText: string
   addPost: (postMessage: string) => void;
   posts: Array<PostType>
   updateNewPostText: (newText: string) => void
}

export type DialogPageType = {
   dialogData: Array<DialogType>
   messages: Array<MessageType>
}

export type SidebarItemType = {
   id: number
   name: string
}

export type SidebarType = {
   sidebar: Array<SidebarItemType>
}

export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogPageType
   sidebar: Array<SidebarItemType>
}

export type RootStatePropsType = {
   addPost: (postMessage: string) => void
   state: RootStateType
   updateNewPostText: (newText: string) => void
}

export type ProfileLocalStateType = {
   newPostText: string
   addPost: (postMessage: string) => void
   state: ProfilePageType
   updateNewPostText: (newText: string) => void
}

export type DialogsLocalStateType = {
   state: DialogPageType
}

export const addPost = () => {
   const newPost: PostType = {
      id: new Date().getTime(),
      message: state.profilePage.newPostText,
      likecount: '0',
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   renderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export let state: RootStateType = {
   profilePage: {
      newPostText: '',
      posts: [
         { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
         { id: 2, message: "It's my first post", likecount: '♥ 14' },
         { id: 3, message: "It's my second post", likecount: '♥ 0' },
      ],
      addPost,
      updateNewPostText,
   },
   dialogsPage: {
      messages: [
         { id: '1', message: "Hi!" },
         { id: '2', message: "How are you?" },
         { id: '3', message: "Yo!" },
         { id: '4', message: "Salam!" },
         { id: '5', message: "Hello!!" },
      ],
      dialogData: [
         { id: "1", name: 'Alex' },
         { id: "2", name: 'Ivan' },
         { id: "3", name: 'Jon' },
         { id: "4", name: 'Andrey' },
         { id: "5", name: 'Mark' },
         { id: "6", name: 'Elvis' },
      ],
   },
   sidebar: [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Steve' },
      { id: 3, name: 'Jon' },
      { id: 4, name: 'Oleg' },
   ]
}



export default state;