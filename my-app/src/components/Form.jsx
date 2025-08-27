export const Form =()=>{
const handleBtnClick =()=>{
    alert("Form submitted");
};
return (
<div>
    <h1>Create Note</h1>
    <form action="">
        <label>title</label>
        <input type="text" id="title"/>
        <br/>
        <label>Description</label>
        <textarea name="" id="desc" cols="30" rows="10"></textarea>
        <br/>
        <button type="submit" onClick={handleBtnClick}>submit</button>
    </form>
</div>
);
};