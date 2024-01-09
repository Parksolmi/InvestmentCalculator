
const UserInput = () => {

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label for="initial">initial investment</label>
            <input id="initial" type="number"></input>
          </div>
          <div>
            <label for="annual">annual investment</label>
            <input id="annual" type="number"></input>
          </div>
        </div>
        
        <div className="input-group" style={{marginTop: '5%'}}>
          <div>
            <label for="expected">expected return</label>
            <input id="expected" type="number"></input>
          </div><div>
            <label for="duration">duration</label>
            <input id="duration" type="number"></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInput;
