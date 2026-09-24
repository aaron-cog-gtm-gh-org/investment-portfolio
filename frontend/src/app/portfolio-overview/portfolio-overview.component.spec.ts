/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { PortfolioOverviewComponent } from './portfolio-overview.component'

describe('PortfolioOverviewComponent', () => {
  let component: PortfolioOverviewComponent
  let fixture: ComponentFixture<PortfolioOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioOverviewComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PortfolioOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should derive the unrealized gain from balance and book cost', () => {
    expect(component.unrealizedGain).toBeCloseTo(component.combinedBalance - component.bookCost, 2)
    expect(component.unrealizedGainPercentage).toBeCloseTo((component.unrealizedGain / component.bookCost) * 100, 6)
  })

  it('should build an asset mix that adds up to 100 percent', () => {
    const total = component.assetMix.reduce((sum, slice) => sum + slice.percentage, 0)
    expect(total).toBe(100)
  })

  it('should offset each donut slice by the length of the preceding slices', () => {
    expect(component.assetMix[0].dashOffset).toBe('0')
    const firstSliceLength = Number(component.assetMix[0].dashArray.split(' ')[0])
    expect(Number(component.assetMix[1].dashOffset)).toBeCloseTo(-firstSliceLength, 6)
  })

  it('should render a donut slice per asset class', () => {
    const slices = fixture.nativeElement.querySelectorAll('.donut-slice')
    expect(slices.length).toBe(component.assetMix.length)
  })
})
