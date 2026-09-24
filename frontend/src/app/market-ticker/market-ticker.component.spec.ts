/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { MarketTickerComponent } from './market-ticker.component'

describe('MarketTickerComponent', () => {
  let component: MarketTickerComponent
  let fixture: ComponentFixture<MarketTickerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketTickerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MarketTickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render a quote per mock symbol', () => {
    const quotes = fixture.nativeElement.querySelectorAll('.quote')
    expect(quotes.length).toBe(component.quotes.length)
  })

  it('should mark negative quotes as down and positive ones as up', () => {
    const changes = fixture.nativeElement.querySelectorAll('.change')
    component.quotes.forEach((quote, index) => {
      expect(changes[index].classList.contains(quote.change >= 0 ? 'up' : 'down')).toBe(true)
    })
  })
})
