# 部署telegram web至自己服务器，实现无需vpn访问使用

## 方案一（自己编译）

基于官方版本K魔改版，新增语言选项：简体中文、繁体中文，隐藏菜单栏部分选项

### 使用说明

按照`README.md`进行依赖安装

### 部署自己服务器说明

#### 申请APPID

请到官方处申请，申请后修改文件`.env`

```
API_ID=1025907
API_HASH=452b0359b988148995f22ff0f4229750
VERSION=1.6.2
VERSION_FULL=1.6.2 (261)
BUILD=261
```

#### 修改`app.ts`

```ts
export const MAIN_DOMAIN = 'web.telegram.org';
```

#### 修改`webpack.common.js`

```js
const domain = 'yourdomain.com';
const localIp = '192.168.92.78';
```

#### 修改`telegramMeWebManager.ts`

```ts
const path = `_websync_?authed=${canRedirect ? '1' : '0'}&version=${encodeURIComponent(App.version + ' ' + App.suffix)}`;
const urls = [
  '//telegram.me/' + path,
  '//t.me/' + path
];
```

#### 修改`dcConfigurator.ts`

chosenServer 变量为数据连接访问接口

```ts
// #if MTPROTO_HAS_WS
export function constructTelegramWebSocketUrl(dcId: DcId, connectionType: ConnectionType, premium?: boolean) {
  const suffix = getTelegramConnectionSuffix(connectionType);
  const path = connectionType !== 'client' ? 'apiws' + TEST_SUFFIX + (premium ? PREMIUM_SUFFIX : '') : ('apiws' + TEST_SUFFIX);
  const chosenServer = `wss://${App.suffix.toLowerCase()}ws${dcId}${suffix}.web.telegram.org/${path}`;
  // const chosenServer = `wss://yourdomain.com`;

  return chosenServer;
}

// #endif
```

```
  // #if MTPROTO_HAS_HTTP
  private transportHTTP = (dcId: DcId, connectionType: ConnectionType, premium?: boolean) => {
    let chosenServer: string;
    if(Modes.ssl || !Modes.http) {
      const suffix = getTelegramConnectionSuffix(connectionType);
      const subdomain = this.sslSubdomains[dcId - 1] + suffix;
      const path = Modes.test ? 'apiw_test1' : 'apiw1';
      chosenServer = 'https://' + subdomain + '.web.telegram.org/' + path;
      // chosenServer = `https://yourdomain.com`;
    } else {
      for(const dcOption of this.dcOptions) {
        if(dcOption.id === dcId) {
          chosenServer = 'http://' + dcOption.host + (dcOption.port !== 80 ? ':' + dcOption.port : '') + '/apiw1';
          break;
        }
      }
    }

    const logSuffix = connectionType === 'upload' ? '-U' : connectionType === 'download' ? '-D' : '';
    return new HTTP(dcId, chosenServer, logSuffix);
  };
  // #endif
```

#### 服务器代理说明

```json
{
  "routes": [
    {"src": "/pluto/(.*)","dest": "https://pluto.web.telegram.org/$1"},
    {"src": "/venus/(.*)","dest": "https://venus.web.telegram.org/$1"},
    {"src": "/aurora/(.*)","dest": "https://aurora.web.telegram.org/$1"},
    {"src": "/vesta/(.*)","dest": "https://vesta.web.telegram.org/$1"},
    {"src": "/flora/(.*)","dest": "https://flora.web.telegram.org/$1"},
    {"src": "/pluto-1/(.*)","dest": "https://pluto-1.web.telegram.org/$1"},
    {"src": "/venus-1/(.*)","dest": "https://venus-1.web.telegram.org/$1"},
    {"src": "/aurora-1/(.*)","dest": "https://aurora-1.web.telegram.org/$1"},
    {"src": "/vesta-1/(.*)","dest": "https://vesta-1.web.telegram.org/$1"},
    {"src": "/flora-1/(.*)","dest": "https://flora-1.web.telegram.org/$1"}
  ]
}
```

[参考资料](https://github.com/tzchz/webogram-api/blob/main/vercel.json)

## 方案二（已编译）

直接找已编译telegram web版，通过搜索替换将服务器url替换成自己的

[详细说明 请查看](https://dzyx.uk/2022/07/30/36/)


### Licensing

The source code is licensed under GPL v3. License is available [here](/LICENSE).
