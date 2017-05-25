
$(function() {
        var date = new Date(); // 날짜 객체 생성
        var y = date.getFullYear(); // 현재 연도
        var m = date.getMonth(); // 현재 월
        var d = date.getDate(); // 현재 일

        var theDate = new Date(y,m,1);
    // 그 날의 요일은?
        var theDay = theDate.getDay();
        var ko_theDay = ['일','월','화','수','목','금','토']
    /* 현재 월의 마지막 일을 구합니다. */
    // 1월부터 12월까지의 마지막 일을 배열로 만듭니다.
        var last = [31,28,31,30,31,30,31,31,30,31,30,31];
    // 4년마다 있는 윤년을 계산합니다.(100년||400년 주기는 제외)
        if (y%4 && y%100!=0 || y%400===0) {
            lastDate = last[1] = 29;
        }
            // 현재 월의 마지막 일이 며칠인지 구합니다.

        var lastDate = last[m];
         console.log(lastDate);
         for(var j=0;j<10;j++){
            $('.cal').append("<div class='date_"+j+"'>"+(d+j)+"</div>");   
        }
    
        /*for(var i=0;i<12;i++){
            for(var j=d;j<=lastDate;j++){
    //            <div class="als-wrapper">
     //               <div class="als-item"><div class="cal"></div>orange</div>
    
                $('.als-wrapper').append("<div class='als-item'><div>"+j+"</div></div>");   
                    if(j==lastDate){
                        lastDate=last[++m];
                          console.log(lastDate);
                        d=1;
                        break;
                    } 
            }
        }/*
        for(var i=0;i<7;i++){
             for(var j=0;j<=12;j++){
            if(d+j>lastDate){
                d=1;

                break;
            }
            $('.cal').append("<div class='date_"+j+"'>"+(d+j)+"</div>");
         }
          $('.date_'+i).append("<br><span>"+ko_theDay[theDay+i]+"<span>");
        }*/     
});
function calendar1(){
    var div= document.getElementsByClassName("date");
    
    var date = new Date(); // 날짜 객체 생성
    var y = date.getFullYear(); // 현재 연도
    var m = date.getMonth(); // 현재 월
    var d = date.getDate(); // 현재 일
  
    // 현재 년(y)월(m)의 1일(1)의 요일을 구합니다.
var theDate = new Date(y,m,1);
    // 그 날의 요일은?
var theDay = theDate.getDay();

/* 현재 월의 마지막 일을 구합니다. */
    // 1월부터 12월까지의 마지막 일을 배열로 만듭니다.
var last = [31,28,31,30,31,30,31,31,30,31,30,31];
    // 4년마다 있는 윤년을 계산합니다.(100년||400년 주기는 제외)
if (y%4 && y%100!=0 || y%400===0) {
    lastDate = last[1] = 29;
}
    // 현재 월의 마지막 일이 며칠인지 구합니다.
var lastDate = last[m];


/* 현재 월의 달력에 필요한 행의 개수를 구합니다. */
    // theDay(빈 칸의 수), lastDate(월의 전체 일수)
var row = Math.ceil((theDay+lastDate)/7);


/* 달력 연도/월을 표기하고 달력이 들어갈 테이블을 작성합니다. */
document.write("<h1>" + y + "." + (m+1) + "</h1>");
    //문자 결합 연산자를 사용해 요일이 나오는 행을 생성합니다.
var calendar = "<table class='calendar_table'>";
calendar += "<tr>";
calendar += "<th>일</th>";
calendar += "<th>월</th>";
calendar += "<th>화</th>";
calendar += "<th>수</th>";
calendar += "<th>목</th>";
calendar += "<th>금</th>";
calendar += "<th>토</th>";
calendar += "</tr>";

    // 달력에 표기되는 일의 초기값!
var dNum = 1;
for (var i=1; i<=row; i++) { // 행 만들기
    calendar += "<tr>";
    for (var k=1; k<=7; k++) { // 열 만들기
        // 월1일 이전 + 월마지막일 이후 = 빈 칸으로!
        if(i===1 && k<=theDay || dNum>lastDate) {
            calendar += "<td> &nbsp; </td>";
        } else {
            calendar += "<td>" + dNum + "</td>";
            dNum++;
        }
    }
    calendar += "</tr>";
}
    return calendar;
 
}
