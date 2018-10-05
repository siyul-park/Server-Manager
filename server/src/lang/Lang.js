let languageData = {
  ko: {
    name_application: '어플리케이션',
    name_logger: '로거',
    name_manager_log: '로그 관리자',
    name_manager_server: '서버 관리자',
    name_manager_socketConnect: '소켓연결 관리자',

    name_logger_default: '기본 로거',

    msg_creating: '%s을(를) 생성하고 있습니다.',
    msg_created: '%s이(가) 생성되었습니다.',

    msg_destroying: '%s을(를) 소멸하고 있습니다.',
    msg_destroyed: '%s이(가) 소멸되었습니다.',

    msg_application_creating: '%s을(를) 생성하고 있습니다.',
    msg_application_created: '%s이(가) 생성되었습니다.',

    msg_application_destroying: '%s을(를) 종료하고 있습니다.',
    msg_application_destroyed: '%s이(가) 종료되었습니다.',

    msg_manager_server_version: '서버관리자의 버전은 %s입니다.',

    msg_server_opening: '서버를 여는 중입니다...',
    msg_httpserver_created: 'http 서버가 만들어졌습니다.',
    msg_socketioserver_created: 'Socket.io 서버가 만들어졌습니다.',
    msg_server_opened: '서버가 열였습니다. 도움말을 보시려면 "help"를 입력해 주세요. (%s초)',

    form_log_msg_color: '\x1b[1m\x1b[36m[%s]\x1b[0m [%s] %s\n> ',
    form_log_info_color: '\x1b[1m\x1b[36m[%s]\x1b[37m [ 알림 ] %s\x1b[0m\n> ',
    form_log_warn_color: '\x1b[1m\x1b[36m[%s]\x1b[31m [ 경고 ] %s\x1b[0m\n> ',
    form_log_config_color: '\x1b[1m\x1b[36m[%s]\x1b[35m [ 구성 ] %s\x1b[0m\n> ',
    form_log_fine_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [ 성공 ] %s\x1b[0m\n> ',
    form_log_finer_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [매우성공] %s\x1b[0m\n> ',
    form_log_finest_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [엄청성공] %s\x1b[0m\n> ',

    form_log_msg: '[%s] [%s] %s',
    form_log_info: '[%s] [ 알림 ] %s',
    form_log_warn: '[%s] [ 경고 ] %s',
    form_log_config: '[%s] [ 구성 ] %s',
    form_log_fine: '[%s] [ 성공 ] %s',
    form_log_finer: '[%s] [매우성공] %s',
    form_log_finest: '[%s] [엄청성공] %s'
  },
  en: {
    name_application: 'Application',
    name_logger: 'Logger',
    name_manager_log: 'Log Manager',
    name_manager_server: 'Server Manager',
    name_manager_socketConnect: 'SocketConnect Manager',

    name_logger_default: 'Default Logger',

    msg_creating: 'Creating %s.',
    msg_created: 'Created %s.',

    msg_destroying: 'Destroying %s.',
    msg_destroyed: 'Destroyed %s.',

    msg_application_creating: 'Creating %s.',
    msg_application_created: 'Created %s.',

    msg_application_destroying: 'Destroying %s.',
    msg_application_destroyed: 'Destroyed %s.',

    msg_manager_server_version: 'Server Manager version: %s',

    msg_server_opening: 'Opening Server...',
    msg_httpserver_created: 'Created http Server.',
    msg_socketioserver_created: 'Created Socket.io Server.',
    msg_server_opened: 'Opened Server(%s). For help, type "help"',

    form_log_msg_color: '\x1b[1m\x1b[36m[%s]\x1b[0m [%s] %s\n> ',
    form_log_info_color: '\x1b[1m\x1b[36m[%s]\x1b[37m [ INFO ] %s\x1b[0m\n> ',
    form_log_warn_color: '\x1b[1m\x1b[36m[%s]\x1b[31m [ WARN ] %s\x1b[0m\n> ',
    form_log_config_color: '\x1b[1m\x1b[36m[%s]\x1b[35m [CONFIG] %s\x1b[0m\n> ',
    form_log_fine_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [ FINE ] %s\x1b[0m\n> ',
    form_log_finer_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [FINER ] %s\x1b[0m\n> ',
    form_log_finest_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [FINEST] %s\x1b[0m\n> ',

    form_log_msg: '[%s] [%s] %s',
    form_log_info: '[%s] [ INFO ] %s',
    form_log_warn: '[%s] [ WARN ] %s',
    form_log_config: '[%s] [CONFIG] %s',
    form_log_fine: '[%s] [ FINE ] %s',
    form_log_finer: '[%s] [FINER ] %s',
    form_log_finest: '[%s] [FINEST] %s'
  }
}

class Lang {
  static setLanguage (language) {
    if (languageData[language]) {
      this.language = language
      this.data = languageData[language]
    } else {
      this.language = language
      this.data = languageData['en']
    }
  }

  static registerData (data) {
    languageData = Object.assign(data, languageData)
    if (languageData[this.language]) {
      this.data = languageData[this.language]
    } else {
      this.data = languageData['en']
    }
  }

  static format (key, args = []) {
    let ans = this.data[key.replace(/\./g, '_')]
    for (const i in args) {
      ans = ans.replace('%s', args[i])
    }
    return ans
  }

  static formatString (string, args = []) {
    for (const i in args) {
      string = string.replace('%s', args[i])
    }
    return string
  }
}

module.exports = Lang
