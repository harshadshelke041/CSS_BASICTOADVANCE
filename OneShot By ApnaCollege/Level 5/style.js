#spinner{
   height: 200px;
   width: 200px;
   background-color: pink;
   border-radius: 50%;
   border: 20px solid #33FFD3;
   border-top: 20px solid black;
   animation: animation 1s ease infinite ;
}

@keyframes animation {
   from{transform: rotate(0deg);}
   to {transform: rotate(360deg);}
}
