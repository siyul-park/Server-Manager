let languageData = {
  ko: {
    name_application: '어플리케이션',
    name_logger: '로거',
    name_manager_log: '로그 관리자',
    name_manager_server: '서버 관리자',
    name_manager_socketConnect: '소켓연결 관리자',
    name_manager_console: '콘솔 관리자',
    name_manager_plugin: '플러그인 관리자',
    name_manager_event: '이벤트 관리자',

    name_logger_default: '기본 로거',

    msg_creating: '%s을(를) 생성하고 있습니다...',
    msg_created: '%s이(가) 생성되었습니다.',

    msg_destroying: '%s을(를) 소멸하고 있습니다...',
    msg_destroyed: '%s이(가) 소멸되었습니다.',

    msg_application_creating: '%s을(를) 생성하고 있습니다...',
    msg_application_created: '%s이(가) 생성되었습니다.',

    msg_application_destroying: '%s을(를) 종료하고 있습니다...',
    msg_application_destroyed: '%s이(가) 종료되었습니다.',

    msg_manager_server_version: '서버관리자의 버전은 %s입니다.',

    msg_server_opening: '서버를 여는 중입니다...',
    msg_httpserver_created: 'http 서버가 만들어졌습니다.',
    msg_socketioserver_created: 'Socket.io 서버가 만들어졌습니다.',
    msg_server_opened: '%s로 서버가 열였습니다. 도움말을 보시려면 "help"를 입력해 주세요. (%s초)',

    msg_plugin_loading: '%s 플러그인(버전: %s)이 로드되고 있습니다...',
    msg_plugin_load_succeed: '플러그인이 성공적으로 로드되었습니다.',
    msg_plugin_load_fail: '플러그인 로드가 실패했습니다.',
    msg_plugin_compile_first: '플러그인을 먼저 컴파일 해주세요.',
    msg_plugin_enabling: '%s(버전: %s) 활성화중...',
    msg_plugin_enable_fail: '%s(버전: %s) 활성화 완료.',
    msg_plugin_enable_succeed: '%s(버전: %s) 활성화 중 오류가 발생했습니다.',

    msg_client_building: '클라이언트가 빌드되고 있습니다.',
    msg_client_build_fail: '클라이언트 빌드가 실패했습니다.',
    msg_client_build_succeed: '클라이언트 빌드가 성공했습니다.',

    msg_user_login: '%s [%s:%s]이(가) 로그인 했습니다.',
    msg_user_connect: '[%s:%s]이(가) 서버에 접촉했습니다.',
    msg_user_disconnect: '[%s:%s]이(가) 서버에서 나갔습니다.',

    err_login_emptyId: '빈 ID를 사용할 수 없습니다.',
    err_login_longId: 'ID는 %s자를 넘을 수 없습니다.',
    err_login_sameId: 'ID가 중복됩니다.',

    form_log_msg_color: '\x1b[1m\x1b[36m[%s]\x1b[0m [%s] %s',
    form_log_info_color: '\x1b[1m\x1b[36m[%s]\x1b[37m [ 알림 ] %s\x1b[0m',
    form_log_warn_color: '\x1b[1m\x1b[36m[%s]\x1b[31m [ 경고 ] %s\x1b[0m',
    form_log_config_color: '\x1b[1m\x1b[36m[%s]\x1b[35m [ 구성 ] %s\x1b[0m',
    form_log_fine_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [ 성공 ] %s\x1b[0m',
    form_log_finer_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [매우성공] %s\x1b[0m',
    form_log_finest_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [엄청성공] %s\x1b[0m',

    form_log_msg: '[%s] [%s] %s',
    form_log_info: '[%s] [ 알림 ] %s',
    form_log_warn: '[%s] [ 경고 ] %s',
    form_log_config: '[%s] [ 구성 ] %s',
    form_log_fine: '[%s] [ 성공 ] %s',
    form_log_finer: '[%s] [매우성공] %s',
    form_log_finest: '[%s] [엄청성공] %s',

    form_user_login: '%s님이 로그인 하셨습니다.',
    form_user_list: '버전: %s 유저수: %s',

    form_promp: '> '
  },
  en: {
    name_application: 'Application',
    name_logger: 'Logger',
    name_manager_log: 'Log Manager',
    name_manager_server: 'Server Manager',
    name_manager_socketConnect: 'SocketConnect Manager',
    name_manager_console: 'Console Manager',
    name_manager_plugin: 'Plugin Manager',
    name_manager_event: 'Event Manager',

    name_logger_default: 'Default Logger',

    msg_creating: 'Creating %s...',
    msg_created: 'Created %s.',

    msg_destroying: 'Destroying %s...',
    msg_destroyed: 'Destroyed %s.',

    msg_application_creating: 'Creating %s...',
    msg_application_created: 'Created %s.',

    msg_application_destroying: 'Destroying %s...',
    msg_application_destroyed: 'Destroyed %s.',

    msg_manager_server_version: 'Server Manager version: %s',

    msg_server_opening: 'Opening Server...',
    msg_httpserver_created: 'Created http Server.',
    msg_socketioserver_created: 'Created Socket.io Server.',
    msg_server_opened: 'Opened Server(%s), For help, type "help". (%s)',

    msg_plugin_loading: 'Loading %s Plugin(version: %s)...',
    msg_plugin_load_succeed: 'Succeed Loading Plugin.',
    msg_plugin_load_fail: 'Fail Loading Plugin.',
    msg_plugin_compile_first: 'Please Complie Plugin First.',
    msg_plugin_enabling: 'Enabling %s(version: %s).',
    msg_plugin_enable_fail: 'Fail to enable %s(version: %s).',
    msg_plugin_enable_succeed: 'Succed to enable %s(version: %s).',

    msg_client_building: 'Building Client...',
    msg_client_build_fail: 'Fail to client build.',
    msg_client_build_succeed: 'Succed to client build.',

    msg_user_login: '%s [%s:%s] Login.',
    msg_user_connect: '[%s:%s] Connect.',
    msg_user_disconnect: '[%s:%s] Disconnect.',

    err_login_emptyId: 'Cannot use empty ID.',
    err_login_longId: 'ID cannot exceed %s characters.',
    err_login_sameId: 'same ID exists!',

    form_log_msg_color: '\x1b[1m\x1b[36m[%s]\x1b[0m [%s] %s',
    form_log_info_color: '\x1b[1m\x1b[36m[%s]\x1b[37m [ INFO ] %s\x1b[0m',
    form_log_warn_color: '\x1b[1m\x1b[36m[%s]\x1b[31m [ WARN ] %s\x1b[0m',
    form_log_config_color: '\x1b[1m\x1b[36m[%s]\x1b[35m [CONFIG] %s\x1b[0m',
    form_log_fine_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [ FINE ] %s\x1b[0m',
    form_log_finer_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [FINER ] %s\x1b[0m',
    form_log_finest_color: '\x1b[1m\x1b[36m[%s]\x1b[32m [FINEST] %s\x1b[0m',

    form_log_msg: '[%s] [%s] %s',
    form_log_info: '[%s] [ INFO ] %s',
    form_log_warn: '[%s] [ WARN ] %s',
    form_log_config: '[%s] [CONFIG] %s',
    form_log_fine: '[%s] [ FINE ] %s',
    form_log_finer: '[%s] [FINER ] %s',
    form_log_finest: '[%s] [FINEST] %s',

    form_user_login: '%s is login',
    form_user_list: 'Version: %s Total User: %s',

    form_promp: '> '
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
