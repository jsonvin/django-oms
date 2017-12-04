# -*- coding: utf-8 -*-
# author: kiven

from channels.routing import route
from crontab.consumers import cmdrun_receive, sendmail_receive

salt_routing = [
    route('websocket.receive',cmdrun_receive, path='/cmdrun/'),
    route('websocket.receive',sendmail_receive, path='/sendmail/'),
]
