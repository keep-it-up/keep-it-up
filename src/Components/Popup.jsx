import React from 'react';

export default class Popup extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    const ratings = [1,2,3,4,5,6,7,8,9,10]
    return (
    
      <div className="popup-backdrop">
        <div className="popup">
          <h1 id="todays-date">Goal status for {this.props.selectedDate}</h1>
          <label>Rate your Goal</label>
          <form id="daily-rating">
            {ratings.map(rating => {
                let idLabel = `this-input-${rating}`
                return (
                    <span>
                        <label className='input-w' for={idLabel}>
                            <span className='label'><strong>{rating}:</strong></span>
                            <input className='input' type='radio' id={idLabel} name="rating" required checked></input>  
                        </label> 
                        {'   '}
                    </span>
                    
                )
            })}
            <br/><br/>
            <label className='input-w' for='comment'>
                Notes:
                <br/>
                <textarea form="daily-rating" rows="8" cols="80" placeholder="Leave your notes about your daily progress here." required></textarea>
            </label>
            <br/>
            {/* onSubmit form here*/}
            <button className="popup-close" onClick={this.props.onClose}>Submit</button>
          </form>
          
          {this.props.children}
        </div>
      </div>
    );
  }
}
