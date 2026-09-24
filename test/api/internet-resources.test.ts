/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('Required Internet resource', () => {
  void describe('PasteBin paste for "Leaked Unsafe Product" challenge available', () => {
    void it('for default configuration (https://pastebin.com/90dUgd7s)', async () => {
      const res = await fetch('https://pastebin.com/90dUgd7s')
      const body = await res.text()
      assert.equal(res.status, 200)
      assert.ok(body.includes('Hueteroneel'))
      assert.ok(body.includes('this coupled with Eurogium Edule was sometimes found fatal'))
    })
  })

  void it('Comment on "Top 10 Fruits you probably dont know" blog post with PasteBin paste URL spoiler available', async () => {
    const res = await fetch('https://listverse.disqus.com/top_20_fruits_you_probably_don039t_know/latest.rss')
    const body = await res.text()
    assert.equal(res.status, 200)
    assert.ok(body.includes('Rippertuer Special Juice'))
    assert.ok(body.includes('https://pastebin.com/90dUgd7s'))
  })

  void it('PasteBin paste (https://pastebin.com/4U1V1UjU) for "Leaked Access Logs" challenge available', async () => {
    const res = await fetch('https://pastebin.com/4U1V1UjU')
    const body = await res.text()
    assert.equal(res.status, 200)
    assert.ok(body.includes('current=0Y8rMnww$*9VFYE%C2%A759-!Fg1L6t&amp;6lB'))
  })

  void it('StackOverflow question "Less verbose access logs using expressjs/morgan" with log snippet and PasteBin paste URL spoiler available', { skip: 'FIXME StackOverflow blocking with 403 error' }, async () => {
    const res = await fetch('https://stackoverflow.com/questions/57061271/less-verbose-access-logs-using-expressjs-morgan')
    const body = await res.text()
    assert.equal(res.status, 200)
    assert.ok(body.includes('/rest/continue-code'))
    assert.ok(body.includes('/api/Challenges/?name=Score%20Board'))
    assert.ok(body.includes('https://pastebin.com/4U1V1UjU'))
  })

  void it('GitHub issue (https://github.com/apostrophecms/sanitize-html/issues/29) for "Server-side XSS Protection" challenge available', async () => {
    const res = await fetch('https://github.com/apostrophecms/sanitize-html/issues/29')
    const body = await res.text()
    assert.equal(res.status, 200)
    assert.ok(body.includes('Sanitization is not applied recursively'))
    assert.ok(body.includes('I am not harmless: &lt;&lt;img src=&quot;csrf-attack&quot;/&gt;img src=&quot;csrf-attack&quot;/&gt; is sanitized to I am not harmless: &lt;img src=&quot;csrf-attack&quot;/&gt;'))
  })
})
