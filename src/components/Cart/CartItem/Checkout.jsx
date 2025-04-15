import { useEffect, useState } from 'react';
import './Checkout.scss'
function Checkout() {
    const [scroll,setScroll]= useState(false)
    const [total,setTotal]=useState(0)
    const [product,setProduct]=useState([])
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
    const [days,setDays]=useState("Saturday")
    useEffect(()=>{
        const data= localStorage.getItem("watch");
        console.log("llllllllllll",data)
        if(data){
            try {
                const parsedData=JSON.parse(data)
                setProduct(Array.isArray(parsedData)?parsedData:[parsedData]);
            } catch (error) {
                console.error(error,"kkkkkkkkkkkkkkk")
                setProduct([])
            }
        }
        // if (data&&data.length>0){
        //     setProduct(prev=>prev?prev: Array.isArray(data)?data:[data]);
        //     console.log(".................")}else{console.warn("mmmm")}
    },[])
    useEffect(()=>{
        if(Array.isArray(product)&&product.length>0){
            setTotal(product.reduce((acc,item)=>acc+(item.price||0),0))
        }

    },[product])
    // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
    const sendToWhatsApp=()=>{
        if (!product.length) return;
        const phoneNumber="201009014597"
        // const totalPrice += product.price
        // const message = `0%ordernewA
        // product:${product[0]?.title || null}%0A
        // price:${product[0]?.price || null}%0A
        // title:${address}%0A
        // phone:${phone}%0A
        // days:${days}%0A
        // total:${total}%0A`
        const message =encodeURIComponent(`Order\n`+product.map(p=>`product:  ${p.title||"N/A"}\nprice:  ${p.price||"N/A"}`).join("\n")+`\nAddress:  ${address}\n Phone:  ${phone}\n Days:  ${days}\n Total:  ${total}`)
        const url = `https://wa.me/${phoneNumber}?text=${message}`
        // const hidden=document.createElement("iframe")
        //     hidden.style.display="none";
        //     hidden.src=url;
        // document.body.appendChild(hidden)
        window.open(url,"_blank")
    }
    if(!product.length) return <p className='p'>loading product....</p> 
    // console.log(product,"vvvvvvvvvvvvvvvvvvvvvvvvvv")
    
const hndlescroll=()=>{
    if(!scroll){
        window.scrollTo(0,0)
        setScroll(true)
    }
}
    return (
        <form >
        <div className='data'>
            {product?.map((item)=>{
                // setTotal(total +item.price);
            return(
            <div className='item' key={item.id}>
                <div>
                    <img className='img' src={item.img} alt="" />
                    </div>
                    <div>
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                    <p>{item.category}</p>
                    </div>
              </div>
            )
        })}
        </div>
            <div className="check" onClick={() => {hndlescroll}}>
            <div className="product"></div>
            <div className="address">
            <label className="add" htmlFor="ADDRESS">ADDRESS</label>
            <input className="input"  id="text" value={address} required
            onChange={(e)=>{
                setAddress(e.target.value) 
            }}
                type="text" 
                name="address" />
            </div>
            <div className="phone">
            <label className="add" htmlFor="phone number">phone number</label>
            <input className="input" id="number" value={phone} onChange={(e)=>setPhone(e.target.value)}
                type="number" required
                name="number" />
            </div>
            <div  className="days">
            <div onClick={()=>{
                setDays("Saturday")
            }}  className={days==="Saturday"?"day active":"day"}>Saturday</div>
            <div onClick={()=>{
                setDays("Sunday")
            }} className={days==="Sunday"?"day active":"day"}>Sunday</div>
            <div onClick={()=>{
                setDays("Monday")
            }}  className={days==="Monday"?"day active":"day"}>Monday</div>
            <div onClick={()=>{
                setDays("Tuesday")
            }}  className={days==="Tuesday"?"day active":"day"}>Tuesday</div>
            <div onClick={()=>{
                setDays("Wednesday")
            }}  className={days==="Wednesday"?"day active":"day"}>Wednesday</div>
            <div onClick={()=>{
                setDays("Thursday")
            }}  className={days==="Thursday"?"day active":"day"}>Thursday</div>
            <div onClick={()=>{
                setDays("friday")
            }}  className={days==="friday"?"day active":"day"}>friday</div>




            </div>

            <div className="total">
                <h1>TOTAL</h1>
                {total}</div>
<button className='sub' type="submit" onClick={phone&&address&&sendToWhatsApp}>Submit</button>
        </div>
        </form>
   
    )
}

export default Checkout
