import { createI18n } from "vue-i18n/index";

const messages = {
    vi: {
      welcomeMsg: 'Chào',
      lang_vi:'Tiếng Việt',
      lang_en:'Tiếng Anh',
      share:'Chia sẻ',
      find_tag:'Tìm tag...',
      add_tag:'Thêm tag...',
      add_song_title:'Thêm bài hát',
      edit_song_title:'Chỉnh sửa bài hát',
      add_song_description:'Link bài hát hoặc danh sách...',
      import:'Thêm',
      save:'Lưu thay đổi',
      view_by_tag:'Hiển thị theo tag'
    },
    en: {
        welcomeMsg: 'Hello',
        lang_vi:'Vietnamese',
        lang_en:'English',
        share:'Share',
        find_tag:'Find tag...',
        add_tag:'Add tag...',
        add_song_title:'Add new song',
        edit_song_title:'Edit song',
        add_song_description:'Link single song or a list...',
        import:'Import',
        save:'Saving changes',
        view_by_tag:'View by tag'
    }
  }
  
const i18n = createI18n({
    locale: 'vi',
    fallbackLocale: 'en',
    messages, 
});
export default i18n;