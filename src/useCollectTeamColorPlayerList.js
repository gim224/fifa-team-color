import axios from "axios";
import { useEffect, useState } from "react";

export default function useCollectTeamColorPlayerList(teamColorId) {
  const [teamColorPlayerList, setTeamColorPlayerList] = useState([]);

  useEffect(() => {
    // const min = Math.min(...teamColorList.map((teamColor) => teamColor.id));
    // const max = Math.max(...teamColorList.map((teamColor) => teamColor.id));

    // if (
    //   !teamColorId ||
    //   Number(teamColorId) < min ||
    //   max < Number(teamColorId)
    // ) {
    //   return;
    // }

    axios
      .get("/fifaonline4/DataCenter/TeamColorPlayerList", {
        params: {
          n1Confederation: 0,
          n4LeagueId: 0,
          teamcolorid: teamColorId,
          n4TeamId: 0,
          n4NationId: 0,
          //'strSeason': "",
          //'strPosition':	"",
          strOrderby: "overallrating descending, salary descending",
          //'strPlayerName': "",
          n4OvrMin: 40,
          n4OvrMax: 200,
          n4SalaryMin: 4,
          n4SalaryMax: 99,
          //'rd':	0.4004900801915299,
        },
        headers: {
          //"Accept": "text/plain, */*; q=0.01",
          //"Accept-Encoding": "gzip, deflate, br",
          //"Accept-Language": "ko-KR,ko;q=0.9",
          //"Connection": "keep-alive",
          //Cookie: PCID=16603806392148007028553; A2SK=act:16603806392433857048; _ga=GA1.2.1078506331.1660380639; _gid=GA1.2.989081745.1660380639; _gcl_au=1.1.1119423841.1660380640; _fbp=fb.1.1660380639723.1986335122; NXGID=469A9003915650A62BE3F3DFCAC80BC2; NXPID=B329747A6F99DD1503DC3D45BAF3BC30; _hjFirstSeen=1; _hjSession_1327448=eyJpZCI6IjJmYjM3YTUwLThiNjctNDdhYS05OTQ0LTNiNmY2ZjA0YWQyZCIsImNyZWF0ZWQiOjE2NjAzODA2NDAxNzMsImluU2FtcGxlIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=0; isCafe=true; NXSIGNUP=-1; NXTPA=-; NXCH=OID=906470972&BOID=906470972&ID=906470972@nx&NICKNAME=c233c; IM=1; ENC=4_z0PQHPLnfA5TdhAwfeS~qWJ2USdB93PZEvkpLpiPdaqCk51nMfxWPjg_Bgy9wmMJvGstdFvlk0ix9h9lHw0qRtRMbq104iS~1CwEqR1yeNrQZwJX5CjUVJ59YQrkLzb3fAooKDQu_BSXa9dTtSIj2Eoba45UZUp_1vOJTX5bBphGFbJeMIBVsy8rAmE4kSYN8A174Ukia9rZqkjPxR8VwOmTvxYwBcCYIxbtbP_xw6UI3k6YJ6ETiX8H2LTdNizhQFjOP_b8XIMe88a~Hb6DEPgi0_rv8wlOa2riZUF5TOZspqzSlPHedEE0ddGtXAqQVMxBojrEh0z9B4Efd9bYWee_GLa1NPAUduV2CgUDAqIZNs~DCinuCTJe7iFGFHS4WqxzMncDIL5Dl8qF_PqdIiIx9_pBjB8S4jFY73dY4UL378xNKPwHBHSDZwHRfGTwxzulVO; IL=1; NXWV=0; Fo4ProfileNew_115662851=false|131936553710; fjrzldlqpsxmtoddlfwk=ijswuHm3E9HiLoshMQ9aynIrm1twQ67W~VXAGkNPORIKRpcOI3P6kAoZql3VemmdxIleei7yCaA~4qt4jG88MkLmYNuRW6vj65FFr1W3_AtbPKaOjnwAGUsFIR08rJk9TM68gQwA_Tt1HJaGaYDk9bhw1ql~MW; zmffjqtjqltmdkffla=ijtK6MrrRE2FnZdJMcNrUbzqxGxzHXn3xpgYTLXiqmuFShXoWC532ee_k8YhCHriHZy1VflyMSoHp2iuKNg~2DgrQ1qHpcyir3GHsG; zmffjqdkfflavkqdjqrotn=ijwc7p1esIhBuMAR344vDH4ziPOI5AKybrbQCgh2lKKoDULiadUIUUItgv8AGrDO1yB9aeBjTEj~zGqHYySvw5mnl30U1Vx2; cto_bundle=sGLrtV9Wb2ZrVzFJZTAlMkJhWGhYdUJEVmNlOXRRdGolMkIwTVpHekJZYm1ac2JFRmRuTU1YJTJCdjAlMkZvOXE1cVpvJTJCZzJlSlBEd2wzWDlqdW53djBLbHhHaElTMVc4UFcyTzAwQ2Yzc0t2aXVGdWg5WkhKWE9OYm5jVU94NzR4WWFjekRNRXlXQlY; NXLW=SID=E50891CB760CE45B822542352D5FAFE8&PTC=https:&DOM=fifaonline4.nexon.com&ID=906470972&CP=; FRE250=iNu90F0jAPnwO_Hp~9oE_NUnqOaV1pQsUjmjqF~oqTmbOmgDuEN8WBbfwFyRnYTxJwjMNY599eqLB2CyVVkIacl3CZ1WPSsL; __RequestVerificationToken=Y2fjOOXCUqDVG_BYQPjxqfgYLVbhgp2OwucJjAU-4b2jKmFolHOQ5jY79f5P4xLcQTKtugFJ06hFYFAo8CcYvUyywiY1; _hjSessionUser_1327448=eyJpZCI6IjE5ZGQ4ZTVkLWQzN2EtNTUxYi1hZWM3LWQwYzlkMTk5OTg3MSIsImNyZWF0ZWQiOjE2NjAzODA2Mzk4ODcsImV4aXN0aW5nIjp0cnVlfQ==; Fo4ProfileOwnerInfo=115662851%7c%eb%8f%8c%ea%b1%b0%eb%b6%81%7c347%7c1515%7ce52e9b1cb4cf3f41384fd326%7c131936553710%7c2018-09-26+%ec%98%a4%ed%9b%84+9%3a33%3a46%7c%ec%8a%a4%ec%9b%a8%eb%8d%b4%7chttps%3a%2f%2ffo4.dn.nexoncdn.co.kr%2flive%2fexternalAssets%2fcommon%2fcrests%2flight%2fmedium%2fl1363.png%7c2019+%ed%81%ac%eb%a6%ac%ec%8a%a4%eb%a7%88%ec%8a%a4%7chttps%3a%2f%2ffo4.dn.nexoncdn.co.kr%2flive%2fexternalAssets%2fcommon%2fcrests%2flight%2fmedium%2fl114609.png%7c1200%7c9149%7c1100%7c1100%7c1%7c50.0%7c50.0%7c100.0%7c29%7c6%7cSupreme%7c1000; FRE81=ifNp2admCcCg1fj79Y1nuAfDNUD8qzpaF1AoO5CPi_1xOQ0bDF6Ef1H14b0UKeUMv7_siTXqFhapeJdGUjk9y6tLc9mky9oA; FRE191=i8o8mIR3kKYaFCN9UNS4ikKZpYEatav2mzIgGRrgJtjNhhZyJBnLVuQ_HydVwlyC1TYfATWd2DcwLIj0xOkexyuRSvcgrmIR; _gat=1; _gat_ADTeamTracker=1; _hjIncludedInSessionSample=1; _gat_UA-116900215-1=1; _gat_UA-136873854-1=1; gnbLogo=null; NPP=NP11:auth:906470972:fcP7p3SLxb_5QEowzUrVSJPfzHx3wHZOFXwMnK3SA6z0v7UQ9oFDbf2_WRPp3_a4VXwOP1AOKTmaagCGwRq8pRHa8KBKPDG72~5AJUn53LwprnUxX22uxiO4R2pyX7jzcyRdvsFe7QA~ym6NBbA5yvsEmcwFWapfdG_fodWsRKZ9maKRTZ0dUZ4EocIRDfzqjaw5agWb~jtzfRJZ3_uk81G0QrdKMdmd0E~ZXfv4xj1TrvEBwbI; EGC=_aidYWGaynPwxak9TWdZ_XynxxASoYLZGXkQP254BSyTGcgExcc7HnE67ok9QGj2xJfKsdJIwUJz5Ax_VT8L3oo5Ol50gn78dinS6aN58_4nUHLhL9aN_VQj5eQNoWD20j6Zmna9TwSt8kcLtn2DIzGn7cHBmCthU6RhVujJyVG_KYKbgi7Vce9UiPArg7kBQf0f0eP~RCtaZ8oCmP2xsDeXOT4dUcUyV9alpAvlHPYXAjuCUu4DQv8ZwhrXAgzrM45m70Qn9misc3H3h~aBOEOyGSyq5LCy1yf~V3YdtanItcJ4ZiOMqhl44OHUZBgxVagabbV0DsgW6o2SaH8~3BywzWkBJ8ZQGeI1wF~NE2gmkjfamDEjkLs4Qe3ukYXqPT3eG9Eny8QO6inzQ8JY42brmaWVw3SQHuUBknAKHUlFqmu56AnM2z2Nv8T0J8oFYpGKHF2YQ5ndkGhMHweXF3qR~zR9c0fFpga0RptA0pMG_mVDGkeGnvRG2ioj1DKKRRxeXcUrLpuIwnU13YaDBaMaEhteTO20bDFMAIY6iqkMahvg55BXdd9Xp_sYQn5ostifjDuahZuZ8vI1X4unAP1LAQSx8e9j2XyxuQL2zmoMLDmryX1XJxIK0vUmOZxyauDXe41C7MHmAjYjiBJEbYTK72BFge145ykSSAm3maO0Txr5DGqSPUirH3MYlXX2EeKoXk~qOBFjmW_Rz1wAm6inneRjYkJQtjuFniq7o~LuzVg~cIkRJgyBCoQo2IJUCm4HmnsZUmeN51jQPWY49GrzQBJuhGmACk~jbwQ8XfTckXuSzsgN6czLH7otM2aazCOQAn3gCgtTTgUPHyTdVlHBI6Z6QtYWO0UmP8gn0n1rPPHoOk05L2sUZR3wbQWuzzgtBx2iFOsRrC1jS~NNyG4W5JHW3QuLkgnYmGbyV_rnJ19nj2KE4GWqf~mudyvyJzbASLvt3msjUyeJDItRcJzYs7JcC2~9h385XniRAIyoAGCE1b6JCKKyjdZ0LMbJXKdBQHQWyvJfvMYM9n0g~PFFv5u65hAG9QqJ6abA0KSv3TAOae8hc8S6WpAdfWi06uJl_7O7qx3tTsLci_RdCHpF_861avMISdqqoLF4lo8gA_i9VPoYz~Xw1~lWWUpnip80fjOaah5H2agiIXFglbWfnW5qXrmmPSCGLOY_J765WHKv2NpwGoPHIpketWCUanx9X39vuSGGxkYTzWzRDQ3bBVrh8Jg9qSUOa470znlXcDdeATaXrmyanOhJidMq3f1x7brgMMQpAPHzNZa6xuVeK20IfFTJYzTtsfprfadl68nyNEltseNuYopTe7IYdrMObq13FC1JhoINpPErmW
          //"Host": "fifaonline4.nexon.com",
          //"Referer": "https://fifaonline4.nexon.com/datacenter/teamcolor",
          // sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
          // sec-ch-ua-mobile: ?0
          //"Sec-Fetch-Dest": "empty",
          //"Sec-Fetch-Mode": "cors",
          //"Sec-Fetch-Site": "same-origin",
          //"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((response) => {
        console.log("useFindTeamColorPlayerList", response.data);
        axios.post(
          `/api/teamColors/${teamColorId}/playerList`,
          {
            players: response.data.players,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setTeamColorPlayerList(response.data.players);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [teamColorId]);

  return teamColorPlayerList;
}
