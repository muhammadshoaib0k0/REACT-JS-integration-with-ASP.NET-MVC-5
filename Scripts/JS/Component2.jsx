function Name() {

    const First = "ali";
    const Last = " g ";
    return (
        <div>
            <h1>
                the name of the person is {First + " " + Last}
            </h1>

            <h2> and the again {First} {Last}</h2>
        </div>
    );
}
//export default Name;

React.render(<Name />, document.getElementById("com2"));