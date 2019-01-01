
import { Component, State } from "@stencil/core";

@Component({
  tag: "date-time-picker",
  styleUrl: "date-time-picker.css"
})
export class DateTimePickerComponent {
  @State() seletedDate= '-NADA-';

  getCustomDateTime(event){
    const dateTime = event.target.value;
    this.seletedDate = dateTime;
  }

  render() {
    return (
      <div class="date-time-picker">
        <h3>This is Date/Time picker!</h3>
        <div>
          <input type="datetime-local" onInput={ (event) => this.getCustomDateTime(event)}/>
          <div><small>sample input - 1999-01-01T00:00</small></div>
        </div>
        <div>
          <p>Here's selected date/time: <strong>{this.seletedDate}</strong></p>
        </div>
      </div>
    );
  }
}