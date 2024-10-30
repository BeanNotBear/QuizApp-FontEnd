import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFetcherComponent } from './quiz-fetcher.component';

describe('QuizFetcherComponent', () => {
  let component: QuizFetcherComponent;
  let fixture: ComponentFixture<QuizFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFetcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
