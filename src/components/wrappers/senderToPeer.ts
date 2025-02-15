/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import {MyMessage} from '../../lib/appManagers/appMessagesManager';
import getMessageSenderPeerIdOrName from '../../lib/appManagers/utils/messages/getMessageSenderPeerIdOrName';
import {i18n} from '../../lib/langPack';
import rootScope from '../../lib/rootScope';
import PeerTitle from '../peerTitle';

export default async function wrapSenderToPeer(message: MyMessage) {
  const senderTitle: HTMLElement = document.createElement('span');
  senderTitle.classList.add('sender-title');

  const fromMe = message.fromId === rootScope.myId && message.peerId !== rootScope.myId;
  senderTitle.append(
    fromMe ?
      i18n('FromYou') :
      new PeerTitle({
        ...getMessageSenderPeerIdOrName(message),
        dialog: message.peerId === rootScope.myId
      }).element
  );

  if(await rootScope.managers.appPeersManager.isAnyGroup(message.peerId) || fromMe) {
    const peerTitle = new PeerTitle({peerId: message.peerId}).element;
    senderTitle.append(' ➝ ', peerTitle);
  }

  return senderTitle;
}
