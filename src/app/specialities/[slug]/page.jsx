"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Activity, ShieldPlus, Stethoscope, Syringe, Users, Bone, Brain, Baby, Heart, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const specialtyData = {
   "anaesthesiology": {
      name: "Anaesthesiology",
      title: "Advanced Anaesthesiology Services",
      icon: Activity,
      color: "from-[#D62828] to-[#F77F00]",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBAAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAEHAgj/xABDEAACAQMCBAQCBggDBgcAAAABAgMABBEFIQYSMUETIlFxMmEUI0KBkbEVJDNSYnKhwQfR8BZDY3Si4SUmNURTVML/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAsEQACAgEEAgECBQUBAAAAAAAAAQIDEQQSITEyQRMikRQzQlFhI0NxgcEF/9oADAMBAAIRAxEAPwBd0hcXa4roGnrgqaRNKH62tP1iMclWSPPo6D9mPJS3r64vc+opmsj5aX+IV/W19qBdlE/EEAVsCvWK3ijEHgiqtyvkNXSKrXK/VmuBl0UISecUf0rJNL3jR26mSZgqDqTQvUeLpI0ki0xAqkYMr5zj5elGoORMnydRiGcEHPtV2BT3GPeuBWmvXls+XeRlP8Ro/YcVXiZay1KdZAPhlbmHtg9RRfhm+mN+VxeWjs4XYnHSs5K5xof+IOoC6SLWUt3jPRoUKmmwcZaN9LS3Mkq855fFaMhAfQk0qVM4+hyuhIMNHUZTFW9jgggg9CO9eWWlDMFRkzULR71dK14KVxjRUZfLULLVyRe1ReCe5rQWiry4NWLa4McTKTWmjHcgVGYVdgA++a5nRTTA95ZT3cp8xxnOM1Vg0sCTEhww7U0fQisg5W3xSLq6azHxJH4P7HO++xFJnbtxgtp03yp5eA245BjrivBHMKKJZpJErMMEjfetmxjA2GaoTPPsqlGWMgdAFVvnVGamT6JGBjFRGyjH+7J+6tyA68i2qk9jisSI+KMKTR2WAqDyRH8KrpHP4yAW55c7mtbMVXJ4shnQ9eXH+6H5GlCS2RdB0aRceLJLPze21O8o8K01lAOUvaA4+e9KVrac/DWnXbE7XUsYH3f9qX+pFOP6b/x/0i0xMXS09WPRKSLMMLtPenew6JTJC6Bgs/hFA+JFxcrR6yHlFBeJR9chpa7KJ+IFAr0BWAV6AphOecVXuR9WatEVWumCRMxrkssGTwhW1mRGYQunMq7/AH0AuAp2A29KLag5eVj3oY6knJr0oRxHB5sZNvIPlTIxVXBQ5Dbg+tX7iSNM75NDpJeZjyrQTwX17mgla3bEAO3TvmjdpIZByiQexpTjmkU4Cj8KKWmoyQyBZYV98EGijPgRdS+0dx4IuxcaKkErZmt/IfmOxo8RXNuAtZhOoxx84XxcqVPU+n9a6WRvuMfKvP1EdsyzTTcockRFaIqUjaoz1pI8gYYodPK/OVB2FE5BsaFyr9Yc1yFzyR4dwfMan02ydrjmZsgdia8xLjPpWwJMcyMRvWtZNj+5deRFupIvtY2oNdQyPMw5SWqaJ2bUVYk+lWVJ/SWDQ7MIepHjTo2ClZR5vQ0QSGP0oXfataWF4UnkCMRtmiNjdw3cQeCQMPlvRYljIKcW8E3gx/uisaNPSpMV5NDyHhEZjj/dFRHwgwXAGamahc5P0yMZ2rUgZSwDdT3l1NQBvaZ/rSNZXbNpFlY/ZS5lf/X409X4DTX2P/pNn8a53pA5pIQeniSUcRM39P3CVs6/S1x6056edk9qRoMC5Qj96nfTj5EopCqH2Mlj8IoTxKPOh+dFbH4RQ3iQbp70tdlMvEBAV6xWCt0wnNUO1duWDHrRE0H1+URwAtnptj1plSzITqHiHAr3bqpZiP60LmeSQfuJ+8asX88cIWS6+Jj5Il3Jo3w7w9NqBW61FMptyQjoPf1p9+phSuWDo9HO3xXAqx2M102LaBpP4yMD8aI2/CksoBuZwg/dQU36rJDaTGK1iMjLsQowOnrQR9cmgcfSLB1X1Dg4rx5622zx4Pfr0dVa55Kj8KWy4xPPn3H+VRS6JPGPqrnn/hkjB/qMUdttTgvVPhZBHY7GvTSqPi2HrSfxN8H2Oenpn+kXIHksZ4/pK+A4IKTpuobtn0rvOkXf6Q0u1uyctJGC2OzdD/UVy2G80i6jazu3jbn2xTf/AIbytDpl5pDSGQaZc+FG56lGUOv5kfdVkdVK5Yl2edbo40PfDpjcajPWpDUZohLZG52NUJQMk4q+/eqbrlq0FkT4SFmx2oRY65bXdw9tGT4sZwcijyQB1IbOKAazHa6a3ixKBK/UgdaKJkntWS1CT9JVu+avRsJZjJjcHFJDcSpp8iyXCsy42C0cg4isks5LjmxncKaJwkDG6LQm/wCJLSw6mGkLcrDymqvAnE7aZqKQzyMbaQ4OT8Jr1xdrseuAJ4OOXvS7Z2MLuMzFPeqFFuOGT74p5R9FRSJNGskbAqwyDWNy+tKXDOq266dFbSXY8RVwCT1o+WdhlG5s9COlTODRYr4stPgDrQmY5vVI7ZqS8uGhQ5z0qhb3Jlu1z6Gs2gysUnggvDi51H0Fk39q51o7ZeD18R66HfH67Uv+Sf8AtXN9FJNzEo6czVsUZLw+4TRv1kfzU76Y31aUjqv1w96dtLP1Se1FIVR2M1ifKKH8SdE96u2J2FVOIv2ae9LXZVLxAI6VutCt0Yg0wztSvxffCxRJmXmcLyxp6se9M5pU4msjNqUFxeMi2Ucflydy2d/w2rHYq1uYUafmkoiroFs2oa5bm7zJIx5mzv8Ad7V2F3j021TmAChcAY60B4d4bW1lj1TleRZRnBAynz+Y+fambU7Fr+2VomQJnB5jXm3SdkuD26YxqhhnPOJdQvLmQJYLgN8TlThKUr271S2vmt2nE6ruGA8rDGa6jecOXm4S5gRD0UZ/yoa3CVw/V7ckdxkZooRlFYcRVllcn5AXSAksUczRqjEV71eVYoW5gSPQdaP2vCtyHHiXEKL3wSxxRW54Ttbyw8COUtcLl0kbGDt8JHpWKmbecBfPUo43HIYtRNrekx2OXTzMG6gf6Nd64HjiPDtvdxw+EbwCZhjBOwA/oKQrXgq8iueae2tpAfi+txkehFdQ0qAW+nwxKjIEGOUnOKdDG4nvb+Ph5Lea816xWEU8hIWGTjGap3Vzb2mTLIq+9b1a/j0+3klkYAKOmetch4j1qa/uH8VtidhnoKbXW5CrbdnB2e2kimt+aNwwO+RSTxTMJL4oOiVc/wANPEtNAaS7VijEsob0ofxBdW9zdGSBOX7q6McSaBueauxR162D2AlB3Bzirdra2t5oUXg3ANzj4c1Ndw+JpMzH2pP065OnalHNzeUHB37VRzt4J68Phlu80q9tk55YxyeuaHF+XrRbirV3kuY1hlPhsu60v+DNOSwzjHWjyH8f7l6G7aNxyOR7Gu08G36X2g2xWRXkRcMM7g1wq1t5g/Kx2p94HuhpuoxRl/JIPN70EluRmFGXA+66/JCaD6TLzXwHyNEOJ5cWvMvQkUE0GXn1Hr9g0n0EvNBS7HPc6gvraP8A2rnGjjk1KNfR2FdHuT+t3/8Ayr/kK53pAzqcY/jb8qBdlD/L+4QYHxRt3pw0k/Up7UnyS/WdKbNIbMKe1FIVT5DRYnyiq/EP7JfeprA7Code3gH81LXZVLoAVutCt0Yk8ntVa70a21mFY55miaEkgqeo9Pxqw1Qyk8pwcfOl2Q3x2jKbXVNSCHB0k30OeyuD9ZbsFXbYrjAx9wo02QqxtsC3xbbbYobwv4b2883J+sI/nYndlx0/pmrF3cKbg8pPKPSpaKmp4Zdq9RH4ty9m9VHhbhmOT6mhsbuT9rHuas32pQzLGj8+FHULmqX6StYzgRznHblAq5I8aU+ey6OfHU/6++rVg5S6QbebbpQkaij/AARMvuakguijeKU3U5612DFas9hudmt7nwy0qK/wYcNk+mCP70SsyGiBBBz3xild+KLC5j8G7tbiPHR4xzYPrRyw1O0m8KKCRHDLzZUEb99u1C4lELU32EWG2+woRqutwWCNhgzAdM1X4k19LGBhGRzYxXOZrq4vy7OxCHc5o66s9gWXJcIq8TcRT39w+ZTyZ6A7UsiZpZ0MgOMgtRma2t48/a3qjKI/QAVWlhEm/nnsef8Abq3t9LS1t7chgoFCoNTXUC5AwfSlQsvMBzZz6UwaOsCI3I/n7g0EoJco2UnLsJ3LyfomRBgjNINxGfpK8x25q6HbBZLacN0AzSPqAX9IgD4Q+9cuYm1vEgnc6Ibx4ZCwVAord+Leyg8KMfLNW9QvBFBEyHAxgKO5qpHppnxc374VtwmaNHNtvkBtcqDtmrMU0mzKzKV+dbuoIEnYRAY7VHnl6VhzcfR0MXkt3wjaSzPzSAEEnvivHCp5tUJ/gNCtHvDLwzJG42inwv3gGi3CQH6SP8lJmsJhw80Hb3Aubvf/ANu/5CkHThy64o/iz/SnvUfLLcM2waJx/wBNIdnka+P5sf8ATSSv+2yaQ/WA03aKcwKflSZI3mHvTbob5t1o5dCKfIbbA7Cta5vbD3zUdg2wr1rR/VPupaK34gBTW68D+1bzRCTGqtOcKanfpVK5kKozKCcCuZyWWEuErzwri8A6CNXOR6H/AL1fubF47hXimDibLKXO2KXeEJnub/U25SBFbBSCO5OaI6Zr0UUosL0qBGx8F26b9iakhZtsafsu1Gn30rHosyyCIlJIcj+H/KohLbE4yqnsGGK8z6n49zI0gUqzEgL9n2qKSWA/FjB9atXJ4u5LgtYj6gKwqKa4dXRYtsdTiqbPaxgukyDHbOKqi8EjkCXqcEg0SQt2DBELHmVrmNDIfsj4mPtWr+WLS5JDF8T/AAjHwDFb0TTmhU3MkZBI8vN1oLqryvK6y+vWuitzHdRyL9ys1xqHNdSlogebBPWquoX6+I0cGyDv61NqEoiXBbJPYUvTOcnA3NUYE5bPNzctzYByc1GInkGSxFSRQjPO/U16nm8JcfhitxgPPqJEkUaHLHeiWkFPHb1xtQlVaY8xPsKKaRDiVnOcKKGT4Okv5GOwzJ46A7mI0lXyOlwefZie9O+hsDf8vZlINBr+x8TU2a6UBebCisr5RylteWetUtPAtbKcIX2G1Db27upR5lIUdBTK0oawRHwfDpc1O+EhIj2ANEuDM5YBeW4MvMQcVbs4bi7nSGBC0jnCgVokuQFBJJ6V1DgDh06dam8u4x9Ik+EH7AoG9o9y46KF7pn6H4fgtj+0Y8zn1JrfBjMdUc9gtEeN25ogMk7iqfBKD6bMx/cApUnwwYfmIu8S3RRZfvH4ilS024ix6P8A/mj3GLcts5HXxKXbZ88RZH7/APaltdFClmEjJBuKaNCf6gCliUGmDQ2xCKKXQuryG+xfYVPq+9r16Ch9i/Srmptm2PtQFWeAEDtWZrwprdaJZtjtih91zY5U61PPeQwzQQOxM0xwkajJNeL14rd2UDxZAN/NhV++tSb6Ez1FdSzJljgXTpLaLVbyWRm8dlXzDpgdKX9YUC6k2yM0duNamttOtlgeNIm5gVAyCRj/ADpVup0dGmedyWJ2A2qO7SWynlFul/8AX02za8kSXctufq5WA9DUn6ekUcsiqwHzxVKSAtbCZmKgjJz6/Kgd67RY6nPTFbGN0Oxjs0ep49/YYhrbzXAjUAKfvxTXw5qGl2M0TamczXDCOE8mQp+fpXNtILc7u8ZUFc8z/wBqLJdXE5ieFEHh/Cc5NOgrZS5eETX/AIWiDjBZkdz8pG52IyKS+MJYrNHP2u1W9O4rgeNIpIJOZIxuN+bbrQzi5rfVrNLq1fIU8rKRuDT4RcWRfPCawuxCuJmlkyTkVATvnFXJIeQGqhYZqvgUnk8tIQOlQlDK+Wqfy1mR22rmEngsaZZfTLlYEzg/ERTfDpsNkRbuvLJjuKi4VW30xIbqeJ3ZlLBlXIBq3eapb3mqiY5UDA371HbNt4RbRUsZYxWGj6fHYxyoieMVyX75pP4pROZmVlyDt70zSNJNEGtQ59qTtaj+kQGQgiQHDj0NHpuxOtSi1gGW9z4nMjtjmGMUIu4HSVkxjuDUoBWUMCetXr63M1uk67+pqmWEIi8Mh4ctg+sWSzY5WlGRXaWYKo5QMelcV0/6m6gdD51kGMd966dBqYkwrBgScVPbJR7H11ysba9EGr2E+pzFIV2B61X4XtZLTU7iKUYIAp7063hWJWUDJ61Hc6bbxs9wi4kPU0lzyUR0+OTn/FY54H/npVtW5uJhjoXH5U18SjMEnoGNKGnn/wAyL85P7Vr7Fx8GSzSkUf0ST6kUryyArzE/dR3QpPqq19A1v6hwsZOlX79s2x9qC2Um4oldPzW+M9qAp9AoGpoIzI4G3qc1XleOytzcXpZEAyFHxP7ClqbjKMznkteSL9yR8/jtTEuSKy14ahyw1qU0OnGeWECS5ccnidznsPRRQea6XwmEpwMhdvWoLvVHv4nMEoJOCB0AHf8AtVTmS5QDPhyg5I6b+1NzjhHkqly5n2E7qRJdElj2ElvOAp/eznNA0uStk8RjDur8y1LJPyAWxU5Z+bKkHJqu8LxOzb7+q1j5Ka4JLDK88txOSXkPsOg9qg5p9i2DjpUpBWvcdtK5wEx82pZUpKKIOaRVJK5BGM56VYsuaC4iKb5q2mlTSLjnj5fl1ohZWotcnky/qaKMWIt1EFHC5Jluha3SMSR5gjg74NGI7UrHeH/cuA6kevelS5k59UnhY5EsWR8iBtTvprD/AGZhinBEsiZ3+YpilzgVCpRkpiVf5QnB2zQpzvRTU0ZGbJyM0JfrTcFMDedq0W7eteQTViyhE9wiNnlJ3wN8ULYzhdnd+H7Gyj0a1RkXHIM7bGq1xpelTXHL4cec52rfD+oWN5YLHZzljF5GUjcVZa2tmk5hyk+tQyzll8LIuKaZbtra2gj5FQYxgUncZcPy+E13p6czN+0iHf5inCAxoPiFZqILQAx7tkYHqO9dCTg8nXRjbHk4FJHcqxVreQEH92iml2d3d27wvG0anoWrol/BbQSEyIMtuNqGNINwij8KfK9v0R/DFAfROG4bK5SaVzNIOgxsKJSoI5mC/EjYI9KsxsA4PcVFxpA0dtFrdmeSeMBZx2kT5/MUndufI+DcI8E78VSWSKj8pA9TU9vxhHelokXfp1zSDql0LpYZE2EmDj+1F+CIkkuLjYEg0W0KNkpdF3W5PGspWxjzUo2JxxKg/wCJ/am/Xk8OyfPd8UnWp5eJFz18UflWexSf0HQY9P4a1ZPKsKk9CjYNZccKxWERlsZWK4zyMc0mx6TaTKGtp2jPbBps4WS+toZbee58aDHl5mJIrmHCSb6IrNzzYzjl3Oe1V73Wb+af6NpkUXp4jOCQPX5V71ae108Swy4Mku5UZ2Hp7Uu3urloGS3KgKNkUYFMUUlkgu1M5T21rg8aq9yrMbi6E7/w759jQlGgu8q4jLDYhvKwqtLqFxzZmyR8ulRzSJOvifER37j2PWsbQyupxXPf8FyTTru05rqxDOq7tGeuPWrMF6t7AhzhhsPVT6UJtbyaLyNKzxvsDnofnVk4EgljyGP7QDv865M2dbaxPv0yzMSzcku0o6MPWoo76WM+DOS2OhNbLAgFt19ewrJ7XxYuYY5l6Y71vItKPUiysijAADSnv2X2rzK8kahid89qFwzNEeU7kdAaMWki3EZjIB271qYNkdnPorteyfZJHtUk2pSxmLByx61UmiMU3L86hkJbUI0G5VV2rHJhxqhLnAc0CyfVuJS4GYoFy3+VM+o358JHABWIlGUVY0HTH4e0iKW7i5J7s8zMR0z2NAdVLW91JyNmGQ5IptayZb9OED9UZX3BzG3THagkyEHKnIolOTH8J5oz/SqcifajNOaMreCph/Sr2nM6S4Xq2w+dRJzM3KR1qa3zbyiV+oOEX86TLgObzFoZNPleIMIJDGY8ecHHMe9OWlatHNZhrqZVZTy5J3Pzrnd1qdvGqpESCOoHaorbUeZhypId/jZulA8MirV0PrX2OpX92ILCS5VxyLGWDZ2J7UQjvhDbRy3WeUwqc+43rlesatdPptva+J5HPNygYAUGukXDSXGmWKvHzeJb5O3Q4G1Kmkj0tNZKf1MEa5qYv51NumEQY96oxSMASwqZ7KYSkKcgb1EWJJGBQnPOSaIgnNWNZX6Tw1exdxGTVWAb1FxDqUdjo86lgJJgURT3zWex0XwxNsHCmNbpQ0J6kdVHqKfuG9Eh0tZbpJOdZfMN+1cmhkVZm3kRh0CscGukcK3DTaCV52ISQgD0FMfIqDdbM4pnT9Hc3/EWku2IPEMZb/5R+VMfGB5NHLDbEiH+tK0TY1yNuxkX8qzHIUW3AKCFUUchI37GrGhapeR6xFbCUtE55SG32rdZTZI8+iTy+TxxlcSi9dQ22elKTOxJPMa3WUMijS+BGZnBxmvQRfDMoGGHpWVlAysgY7kAYBGcD1q/aSM4XmPUb1lZXLsyzos2nmh5W3Byv3VrSZnL8hOQGxvW6yjRNJfTIj1FAlzIF7HIrLORklUqa1WVn6jlzWshHVN1gk+0wIP4VrhKCO54w0uKUZRsEj1wSaysrJm6Xo7jxBBHcWrRSrlQu3yrj2oEx3U1uGLRg7c25FZWUdD5G6tLAImYq5QHyntUJJzWVlUyJo9E1scPzdwMiqvivNNJI5ywG1ZWUiwbWuSJWy24BqR55AhVWwMgbVlZSmE1yG7pAZ+U7heVAPQYrriSsum2hGP2K/lWVlZMTo293+hUv7yYzN58Z9Kit+nvWVlCh8vIswHDSHA8oyK5nq1/cajdSNdPzcpwqjoo+VZWVvsL0VZfrLZZW+NDgGnjgeRjY3iE+UOCB6ZFZWUR0yPjT/0Wb+ZPzpXU/wDisX88dZWV3syP5Z//2Q==",
      overview: "Our Anaesthesiology department is dedicated to providing state-of-the-art pain management and anesthesia services. Our team of highly trained professionals ensures the utmost safety, comfort, and care for every patient undergoing surgical, diagnostic, or therapeutic procedures.",
      longDescription1: "The field of anaesthesiology has evolved remarkably over the decades, transitioning from basic pain relief to comprehensive perioperative medicine. At Samrat Hospital, our Department of Anaesthesiology stands at the forefront of this evolution. We are equipped with the latest monitoring technology and utilize evidence-based protocols to deliver personalized care. Our approach is holistic, beginning with a thorough preoperative assessment to understand each patient's unique medical history and concerns. This allows us to tailor an anesthetic plan that minimizes risks and optimizes outcomes.",
      longDescription2: "During the intraoperative phase, our vigilance is unmatched. Continuous monitoring of vital signs, including advanced hemodynamics and neurological status, is standard practice. We utilize multimodal analgesia techniques to reduce reliance on opioids, thereby facilitating a smoother and faster recovery. Postoperatively, our dedicated Acute Pain Management Service ensures that patients remain comfortable, promoting early mobilization and reducing hospital stay lengths. We believe that effective pain management is a fundamental human right and a critical component of the healing process.",
      services: [
         { name: "General Anesthesia", desc: "Comprehensive medically induced coma for major surgeries, ensuring complete unconsciousness and lack of sensation." },
         { name: "Regional Anesthesia", desc: "Targeted numbing of a large part of the body, such as from the waist down, using epidural or spinal techniques." },
         { name: "Local Anesthesia", desc: "Numbing a small, specific area for minor procedures." },
         { name: "Conscious Sedation", desc: "Providing relaxation and pain relief while allowing the patient to remain awake and cooperative." },
         { name: "Acute Pain Management", desc: "Specialized postoperative care to minimize discomfort and accelerate recovery." },
         { name: "Preoperative Assessment", desc: "Thorough medical evaluation to determine the safest anesthetic plan." },
         { name: "Labor Analgesia", desc: "Providing pain relief during childbirth, including epidurals." },
         { name: "Critical Care Support", desc: "Assisting in the management of critically ill patients in the ICU." }
      ],
      technology: [
         "Advanced Anesthesia Workstations with Integrated Monitoring",
         "Ultrasound-Guided Regional Anesthesia Equipment",
         "Target Controlled Infusion (TCI) Pumps",
         "Continuous Cardiac Output Monitoring",
         "Bispectral Index (BIS) Monitoring for Depth of Anesthesia",
         "Fiberoptic Intubation Scopes for Difficult Airways"
      ],
      faqs: [
         { q: "Is anesthesia safe?", a: "Yes, modern anesthesia is extremely safe. Our anesthesiologists use advanced monitoring and tailor the anesthetic plan to your specific health profile to minimize any risks." },
         { q: "Will I feel any pain during surgery?", a: "No. The primary goal of anesthesia is to ensure you are completely pain-free during the procedure. We also provide comprehensive postoperative pain management." },
         { q: "How long does it take to recover from anesthesia?", a: "Recovery time varies depending on the type of anesthesia and the procedure. You may feel drowsy for a few hours. Your anesthesiologist will discuss what to expect." },
         { q: "Can I eat before surgery?", a: "Generally, you will be instructed to fast (no food or drink) for a certain number of hours before your surgery to prevent complications such as aspiration. You will receive specific instructions prior to your procedure." }
      ]
   },
   "orthopaedic": {
      name: "Orthopaedic",
      title: "Comprehensive Orthopaedic Care",
      icon: Bone,
      color: "from-[#00A896] to-[#028090]",
      image: "data:image/jpeg;base64,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",
      overview: "Our Orthopaedic department offers expert diagnosis and treatment for all musculoskeletal conditions. From complex joint replacements to sports injuries and trauma, our specialists use advanced techniques to restore mobility and improve your quality of life.",
      longDescription1: "Musculoskeletal health is vital for an active and fulfilling life. The Orthopaedic Department at Samrat Hospital is a center of excellence dedicated to the prevention, diagnosis, and treatment of disorders of the bones, joints, ligaments, tendons, and muscles. Our team comprises highly skilled orthopedic surgeons, sports medicine specialists, and dedicated rehabilitation professionals who work collaboratively to deliver comprehensive care. We treat a wide spectrum of conditions, ranging from acute fractures and sports-related injuries to chronic degenerative diseases like osteoarthritis and rheumatoid arthritis. Our patient-centric philosophy ensures that every treatment plan is customized to meet the specific functional goals of the individual.",
      longDescription2: "We pride ourselves on offering the latest advancements in orthopedic surgery, including minimally invasive techniques, arthroscopy, and computer-assisted joint replacement. These innovative approaches translate to smaller incisions, less tissue damage, reduced postoperative pain, and faster recovery times for our patients. Furthermore, we emphasize the importance of non-surgical interventions whenever possible. Our robust physical therapy and rehabilitation programs are integral to the recovery process, helping patients regain strength, flexibility, and independence. Whether you are an elite athlete aiming to return to play or an individual seeking relief from chronic joint pain, our Orthopaedic Department is committed to helping you move freely again.",
      services: [
         { name: "Total Joint Replacement", desc: "Advanced surgical procedures for hip, knee, and shoulder replacement to relieve pain and restore function." },
         { name: "Arthroscopic Surgery", desc: "Minimally invasive procedures to diagnose and treat joint problems using a small camera and specialized instruments." },
         { name: "Spine Surgery", desc: "Treatment for herniated discs, spinal stenosis, and spinal deformities, including minimally invasive spine surgery." },
         { name: "Sports Medicine", desc: "Comprehensive care for sports-related injuries, including ligament tears, tendonitis, and sprains." },
         { name: "Trauma and Fracture Care", desc: "Expert management of complex fractures and orthopedic trauma." },
         { name: "Pediatric Orthopaedics", desc: "Specialized care for musculoskeletal conditions in children, such as scoliosis and clubfoot." },
         { name: "Hand and Upper Extremity Surgery", desc: "Treatment for conditions affecting the hand, wrist, elbow, and shoulder." },
         { name: "Foot and Ankle Surgery", desc: "Care for a variety of foot and ankle problems, including bunions, flat feet, and Achilles tendon injuries." }
      ],
      technology: [
         "Computer-Assisted Navigation for Joint Replacement",
         "High-Definition Arthroscopy Systems",
         "Advanced Fluoroscopy for Intraoperative Imaging",
         "Custom-Fit Orthotics and Prosthetics Lab",
         "Dedicated Orthopedic Operating Suites",
         "Comprehensive Physical Therapy and Rehabilitation Center"
      ],
      faqs: [
         { q: "How do I know if I need a joint replacement?", a: "Joint replacement is typically considered when conservative treatments (like medication, physical therapy, and injections) no longer relieve severe joint pain that interferes with your daily activities." },
         { q: "What is the recovery time for arthroscopic surgery?", a: "Recovery is generally much faster than open surgery. Many patients return to normal activities within a few weeks, though this depends on the specific procedure performed." },
         { q: "Do you treat sports injuries?", a: "Yes, our sports medicine specialists are experienced in treating a wide range of athletic injuries and can help you safely return to your sport." },
         { q: "What should I expect during my first orthopedic consultation?", a: "Your doctor will review your medical history, perform a physical examination, and may order diagnostic imaging (like X-rays or MRI) to accurately diagnose your condition and discuss treatment options." }
      ]
   },
   "general-medicine": {
      name: "General Medicine",
      title: "Expert General Medicine & Primary Care",
      icon: Stethoscope,
      color: "from-[#1E3A5F] to-[#2B4A6F]",
      image: "/hospitalimg.webp",
      overview: "Our General Medicine department is your first line of defense for health and wellness. We provide comprehensive primary care, chronic disease management, and preventive services to keep you and your family healthy.",
      longDescription1: "The Department of General Medicine at Samrat Hospital serves as the cornerstone of our healthcare delivery system. Our physicians are highly trained diagnosticians who specialize in the comprehensive care of adult patients. We focus on the prevention, diagnosis, and non-surgical treatment of a vast array of diseases. Our approach is holistic, treating the patient as a whole rather than focusing solely on isolated organ systems. We understand that many medical conditions are complex and interrelated, requiring a broad perspective and meticulous attention to detail. From managing complex chronic illnesses to addressing acute medical issues, our general medicine team is equipped to handle the diverse healthcare needs of our community.",
      longDescription2: "A significant component of our practice is dedicated to preventive medicine. We believe that proactive health management is the key to longevity and vitality. This includes routine health screenings, vaccinations, lifestyle counseling, and early detection of potential health risks. Furthermore, our general physicians act as central coordinators of your healthcare journey. Should you require specialized care, our doctors collaborate seamlessly with other specialists within the hospital to ensure that your treatment is integrated, comprehensive, and tailored to your specific needs. We strive to build long-lasting relationships with our patients based on trust, open communication, and mutual respect.",
      services: [
         { name: "Preventive Health Screenings", desc: "Comprehensive check-ups to detect health issues early and promote overall wellness." },
         { name: "Chronic Disease Management", desc: "Expert care for conditions like diabetes, hypertension, asthma, and heart disease." },
         { name: "Infectious Disease Treatment", desc: "Diagnosis and management of a wide range of bacterial, viral, and fungal infections." },
         { name: "Adult Immunizations", desc: "Providing necessary vaccines to protect against preventable diseases." },
         { name: "Geriatric Care", desc: "Specialized medical care addressing the unique health needs of older adults." },
         { name: "Pre-operative Medical Evaluations", desc: "Assessing patients' medical readiness for surgery." },
         { name: "Lifestyle and Nutrition Counseling", desc: "Guidance on diet, exercise, and healthy habits to prevent disease." },
         { name: "Unexplained Symptom Diagnosis", desc: "Expert investigation of complex or vague symptoms to determine the underlying cause." }
      ],
      technology: [
         "Advanced Diagnostic Laboratory Services",
         "Comprehensive Imaging Capabilities (X-ray, Ultrasound, CT, MRI)",
         "ECG and Cardiovascular Monitoring",
         "Pulmonary Function Testing",
         "Electronic Health Records for Seamless Care Coordination",
         "Point-of-Care Testing for Rapid Results"
      ],
      faqs: [
         { q: "What does a General Medicine doctor do?", a: "General Medicine doctors (Internists) provide comprehensive primary care for adults. They diagnose and treat a wide variety of illnesses, manage chronic conditions, and provide preventive care." },
         { q: "How often should I get a routine check-up?", a: "Generally, healthy adults should have a routine check-up once a year. However, if you have chronic conditions, you may need to see your doctor more frequently." },
         { q: "Do you treat children?", a: "General Medicine typically focuses on adult care. We have a dedicated Pediatrics department for the healthcare needs of children and adolescents." },
         { q: "Can a General Medicine doctor manage my diabetes and high blood pressure?", a: "Yes, managing chronic conditions like diabetes and hypertension is a core component of General Medicine." }
      ]
   },
   "general-surgeon": {
      name: "General Surgeon",
      title: "Advanced General Surgery",
      icon: Activity,
      color: "from-[#7B2D8E] to-[#9D4EDD]",
      image: "/hospitalimg.webp",
      overview: "Our General Surgery department provides a wide range of surgical interventions, utilizing minimally invasive techniques whenever possible to ensure faster recovery times, less pain, and optimal surgical outcomes.",
      longDescription1: "The Department of General Surgery at Samrat Hospital is committed to delivering exceptional surgical care with a focus on patient safety, innovation, and compassionate service. Our team of highly experienced surgeons is proficient in a broad spectrum of surgical procedures, ranging from routine appendectomies and hernia repairs to complex gastrointestinal and oncological surgeries. We understand that undergoing surgery can be a stressful experience, which is why we prioritize clear communication, thorough preoperative education, and comprehensive postoperative support. Our multidisciplinary approach ensures that each patient receives a meticulously planned surgical strategy tailored to their specific diagnosis and overall health status.",
      longDescription2: "A hallmark of our department is our expertise in minimally invasive surgery (laparoscopy). By using specialized instruments and small incisions, we are able to perform complex procedures with significantly less trauma to the body. This translates to numerous benefits for our patients, including reduced postoperative pain, shorter hospital stays, minimal scarring, and a much faster return to normal daily activities. Our state-of-the-art operating theaters are equipped with the latest surgical technology, allowing our surgeons to operate with unparalleled precision and safety. We are dedicated to continuous quality improvement and actively participate in surgical research to bring the best possible care to our community.",
      services: [
         { name: "Laparoscopic Surgery", desc: "Minimally invasive techniques for procedures like gallbladder removal and appendectomy." },
         { name: "Hernia Repair", desc: "Surgical correction of inguinal, umbilical, and incisional hernias, often using mesh and laparoscopic methods." },
         { name: "Gastrointestinal Surgery", desc: "Treatment of diseases of the stomach, intestines, colon, and rectum." },
         { name: "Breast Surgery", desc: "Surgical management of benign and malignant breast diseases." },
         { name: "Thyroid and Endocrine Surgery", desc: "Surgical treatment of the thyroid, parathyroid, and other endocrine glands." },
         { name: "Colorectal Surgery", desc: "Specialized care for disorders of the colon, rectum, and anus." },
         { name: "Trauma Surgery", desc: "Emergency surgical intervention for severe injuries." },
         { name: "Minor Surgical Procedures", desc: "Excision of cysts, lipomas, and other skin lesions." }
      ],
      technology: [
         "Advanced Laparoscopic Towers with High-Definition Imaging",
         "Harmonic Scalpel and Advanced Energy Devices for Tissue Sealing",
         "State-of-the-Art Operating Theaters with HEPA Filtration",
         "Intraoperative Ultrasound Capabilities",
         "Advanced Surgical Stapling Devices",
         "Dedicated Post-Anesthesia Care Unit (PACU)"
      ],
      faqs: [
         { q: "What is laparoscopic surgery?", a: "Laparoscopic surgery is a minimally invasive technique where the surgeon uses small incisions and a camera to operate. It usually results in less pain and a faster recovery compared to traditional open surgery." },
         { q: "How long will I be in the hospital after surgery?", a: "Hospital stay depends on the type of surgery. Many laparoscopic procedures are performed on an outpatient basis (you go home the same day), while others may require an overnight stay or longer." },
         { q: "How do I prepare for my surgery?", a: "Your surgeon and our preoperative team will provide you with specific instructions, which typically include fasting for a certain period before the surgery and adjusting certain medications." },
         { q: "Will I have a large scar?", a: "If you undergo laparoscopic surgery, your scars will be very small. For open surgeries, the surgeon will make the incision as small and cosmetically appealing as possible." }
      ]
   },
   "obs-and-gynae": {
      name: "Obs and Gynae",
      title: "Women's Health & Maternity Care",
      icon: Baby,
      color: "from-[#F77F00] to-[#D62828]",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop",
      overview: "Our Obstetrics and Gynecology department provides comprehensive healthcare for women at every stage of life. From routine wellness exams to high-risk pregnancies and complex gynecological surgeries, we offer expert, compassionate care.",
      longDescription1: "The Department of Obstetrics and Gynecology at Samrat Hospital is dedicated to empowering women through comprehensive healthcare services. We understand that a woman's healthcare needs evolve significantly from adolescence through menopause and beyond. Our team of compassionate and highly skilled obstetricians and gynecologists provides personalized care that addresses these unique physical and emotional needs. We offer a welcoming and supportive environment where women can comfortably discuss their health concerns and receive expert guidance. Our commitment extends beyond treating illness; we emphasize preventive care, health education, and empowering our patients to make informed decisions about their well-being.",
      longDescription2: "Our obstetrics service is renowned for providing exceptional care for both routine and high-risk pregnancies. We are committed to ensuring a safe, healthy, and joyful birthing experience for every mother and child. Our advanced labor and delivery suites are designed for comfort and safety, supported by a state-of-the-art Neonatal Intensive Care Unit (NICU). In gynecology, we offer advanced diagnostic and treatment options for a wide array of conditions, including menstrual disorders, endometriosis, fibroids, and gynecologic cancers. We specialize in minimally invasive gynecological surgery, which offers women faster recovery times and less postoperative discomfort. We are your lifelong partners in health.",
      services: [
         { name: "Prenatal Care", desc: "Comprehensive monitoring and care throughout pregnancy to ensure the health of mother and baby." },
         { name: "High-Risk Pregnancy Management", desc: "Specialized care for pregnancies complicated by medical conditions or other risk factors." },
         { name: "Labor and Delivery Services", desc: "Expert support and medical care during childbirth, including cesarean sections if necessary." },
         { name: "Routine Gynecological Exams", desc: "Annual check-ups, Pap smears, and breast examinations for preventive health." },
         { name: "Minimally Invasive Gynecological Surgery", desc: "Laparoscopic and hysteroscopic procedures for conditions like fibroids and endometriosis." },
         { name: "Family Planning and Contraception", desc: "Counseling and provision of various contraceptive methods." },
         { name: "Menopause Management", desc: "Expert care and symptom relief during the menopausal transition." },
         { name: "Infertility Evaluation", desc: "Initial assessment and guidance for couples struggling to conceive." }
      ],
      technology: [
         "Advanced 3D/4D Obstetric Ultrasound",
         "Fetal Heart Rate Monitoring Systems",
         "Fully Equipped Labor, Delivery, and Recovery (LDR) Rooms",
         "High-Definition Laparoscopy Equipment for Gynecological Surgery",
         "Colposcopy and Cervical Pathology Screening",
         "Bone Densitometry (DEXA) for Osteoporosis Screening"
      ],
      faqs: [
         { q: "When should I schedule my first prenatal visit?", a: "It is generally recommended to schedule your first prenatal visit around 8 weeks after your last menstrual period." },
         { q: "What is a high-risk pregnancy?", a: "A pregnancy is considered high-risk if there are potential complications that could affect the mother, the baby, or both. This could be due to age, pre-existing health conditions, or issues that arise during pregnancy." },
         { q: "Do you offer minimally invasive hysterectomies?", a: "Yes, our surgeons are highly experienced in performing minimally invasive (laparoscopic) hysterectomies, which typically involve a much shorter recovery time than traditional open surgery." },
         { q: "What happens during an annual well-woman exam?", a: "The exam usually includes a discussion of your medical history, a physical exam (including a breast and pelvic exam), a Pap smear (if indicated), and counseling on preventive care and family planning." }
      ]
   },
   "critical-care": {
      name: "Anaesthesiology /Critical Care",
      title: "Intensive Critical Care",
      icon: Heart,
      color: "from-[#028090] to-[#00A896]",
      image: "data:image/jpeg;base64,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",
      overview: "Our Critical Care unit provides round-the-clock, intensive monitoring and life support for patients with severe or life-threatening illnesses and injuries. Our multidisciplinary team is dedicated to giving the highest level of care when it matters most.",
      longDescription1: "The Intensive Care Unit (ICU) at Samrat Hospital represents the pinnacle of medical monitoring and intervention. Our Critical Care Medicine department is staffed by a dedicated team of intensivists, specially trained ICU nurses, respiratory therapists, and clinical pharmacists who work collaboratively 24/7. We care for patients facing life-threatening conditions such as severe infections (sepsis), major trauma, acute respiratory failure, complex postoperative complications, and multiorgan failure. The ICU environment is meticulously designed to provide constant, intense observation and immediate therapeutic responses. We utilize advanced life support technologies to stabilize patients and support failing organ systems, giving the body the crucial time it needs to heal.",
      longDescription2: "Beyond the technology, we recognize that critical illness is a profoundly stressful experience for both the patient and their loved ones. Our approach to critical care is deeply compassionate and family-centered. We prioritize clear, frequent, and honest communication with family members, keeping them informed about the patient's condition, the rationale behind treatments, and the anticipated prognosis. We hold regular family meetings to discuss care goals and ensure that decisions align with the patient's values. Furthermore, we are committed to minimizing the long-term physical and psychological impacts of critical illness (Post-Intensive Care Syndrome) by implementing early mobility programs and cognitive support strategies within the ICU.",
      services: [
         { name: "Continuous Hemodynamic Monitoring", desc: "Advanced tracking of heart function, blood pressure, and fluid status." },
         { name: "Mechanical Ventilation", desc: "Life-saving respiratory support for patients unable to breathe adequately on their own." },
         { name: "Management of Sepsis and Shock", desc: "Aggressive, protocol-driven treatment for overwhelming infections and cardiovascular collapse." },
         { name: "Post-Operative Intensive Care", desc: "Specialized monitoring and support following major or complex surgeries." },
         { name: "Trauma Resuscitation", desc: "Immediate, intensive care for patients with severe, multiple injuries." },
         { name: "Renal Replacement Therapy", desc: "Continuous dialysis modalities for patients with acute kidney injury in the ICU." },
         { name: "Nutritional Support", desc: "Specialized enteral and parenteral nutrition for critically ill patients." },
         { name: "Multidisciplinary Care Coordination", desc: "Seamless collaboration with all medical and surgical specialties." }
      ],
      technology: [
         "Advanced Multiparameter Patient Monitors at Every Bed",
         "State-of-the-Art Microprocessor-Controlled Ventilators",
         "Continuous Renal Replacement Therapy (CRRT) Machines",
         "Arterial Blood Gas (ABG) Analyzers for Rapid Results",
         "Bedside Ultrasound and Echocardiography",
         "Centralized Monitoring Stations with Alert Systems"
      ],
      faqs: [
         { q: "What is an Intensivist?", a: "An intensivist is a physician who specializes in the care of critically ill patients, typically working exclusively in the Intensive Care Unit (ICU)." },
         { q: "Why are visiting hours restricted in the ICU?", a: "Visiting hours are carefully managed to ensure patients receive adequate rest and that the medical team can perform necessary procedures uninterrupted. We try to balance this with the family's need to be present." },
         { q: "What does it mean when a patient is on a ventilator?", a: "A ventilator is a machine that helps a patient breathe when they are unable to do so adequately on their own due to illness, injury, or heavy sedation." },
         { q: "How is pain managed in the ICU?", a: "Pain management is a high priority. We use a variety of medications and continuous monitoring to assess and control pain, keeping the patient as comfortable as possible while ensuring safety." }
      ]
   },
   "neuro-surgery": {
      name: "Neuro Surgery",
      title: "Expert Neurological Surgery",
      icon: Brain,
      color: "from-[#7B2D8E] to-[#9D4EDD]",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFFo6u9oCZA26IYpPVz36wxBmBPEu3fjn8Q&s",
      overview: "Our Neurosurgery department specializes in the surgical treatment of complex conditions affecting the brain, spinal cord, and peripheral nerves. We utilize advanced neuro-navigation and microsurgical techniques to ensure precision and optimal outcomes.",
      longDescription1: "Neurosurgery demands unparalleled precision, expertise, and technological support. The Department of Neurosurgery at Samrat Hospital is a premier center dedicated to providing world-class surgical care for patients with neurological disorders. Our team of highly trained neurosurgeons possesses extensive experience in managing a wide array of complex conditions, including brain tumors, cerebrovascular diseases (such as aneurysms and stroke), spinal cord disorders, and traumatic brain injuries. We approach each case with meticulous planning, utilizing advanced preoperative imaging and 3D modeling to map the intricate anatomy of the nervous system and determine the safest, most effective surgical trajectory.",
      longDescription2: "We are heavily invested in the latest neurosurgical technologies that enhance surgical precision and patient safety. Our operating theaters are equipped with advanced neuro-navigation systems, high-definition operating microscopes, and intraoperative neurophysiological monitoring. This technology allows our surgeons to operate with millimeter accuracy, removing diseased tissue while preserving critical neurological functions. We are also leaders in minimally invasive spine surgery, offering solutions that significantly reduce recovery time and postoperative pain compared to traditional open spine procedures. From the initial consultation through surgery and comprehensive neuro-rehabilitation, our multidisciplinary team provides continuous, compassionate support.",
      services: [
         { name: "Brain Tumor Surgery", desc: "Expert removal of benign and malignant brain tumors using advanced microsurgical techniques." },
         { name: "Complex Spine Surgery", desc: "Treatment for spinal stenosis, herniated discs, spinal deformities, and spinal tumors." },
         { name: "Minimally Invasive Spine Surgery", desc: "Advanced techniques for spine conditions that minimize tissue damage and speed recovery." },
         { name: "Cerebrovascular Surgery", desc: "Surgical management of aneurysms, arteriovenous malformations (AVMs), and stroke." },
         { name: "Neurotrauma Care", desc: "Emergency surgical intervention for traumatic brain and spinal cord injuries." },
         { name: "Peripheral Nerve Surgery", desc: "Treatment for conditions like carpal tunnel syndrome and nerve injuries." },
         { name: "Pediatric Neurosurgery", desc: "Specialized care for neurological conditions in children, such as hydrocephalus." },
         { name: "Functional Neurosurgery", desc: "Procedures like Deep Brain Stimulation (DBS) for movement disorders." }
      ],
      technology: [
         "Image-Guided Neuro-Navigation Systems (Frameless Stereotaxy)",
         "High-Definition Operating Microscopes with Fluorescence",
         "Intraoperative Neurophysiological Monitoring (IONM)",
         "Cavitron Ultrasonic Surgical Aspirator (CUSA) for Tumor Removal",
         "Advanced Neuro-Endoscopy Equipment",
         "Dedicated Neuro-Intensive Care Unit (Neuro-ICU)"
      ],
      faqs: [
         { q: "What is minimally invasive spine surgery?", a: "This approach uses smaller incisions and specialized instruments to access the spine, causing less damage to surrounding muscles. This typically results in less pain and a faster recovery." },
         { q: "How long does it take to recover from brain surgery?", a: "Recovery varies widely depending on the type of surgery, the patient's overall health, and the specific condition being treated. It can range from a few weeks to several months." },
         { q: "What is neuro-navigation?", a: "Neuro-navigation is like a GPS system for the brain. It uses preoperative imaging (MRI/CT) to guide the surgeon's instruments in real-time during surgery, increasing precision and safety." },
         { q: "Will I need physical therapy after neurosurgery?", a: "Many patients require physical, occupational, or speech therapy after neurosurgery to help regain lost functions and maximize their recovery." }
      ]
   },
   "urology": {
      name: "Urology",
      title: "Advanced Urological Care",
      icon: Activity,
      color: "from-[#D62828] to-[#A31621]",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=400&fit=crop",
      overview: "Our Urology department provides comprehensive medical and surgical care for conditions affecting the male and female urinary tract, as well as the male reproductive system. We offer advanced, minimally invasive treatments for a wide range of urological issues.",
      longDescription1: "The Department of Urology at Samrat Hospital is dedicated to delivering expert, discreet, and compassionate care for a broad spectrum of urological conditions. Our highly skilled urologists are proficient in diagnosing and treating disorders of the kidneys, ureters, bladder, urethra, and male reproductive organs. We manage common issues such as urinary tract infections, kidney stones, and enlarged prostate (BPH), as well as complex conditions including urologic cancers (prostate, kidney, bladder) and male infertility. We recognize that urological problems can significantly impact a patient's quality of life and often involve sensitive topics; therefore, we prioritize patient comfort, privacy, and open communication throughout the treatment process.",
      longDescription2: "We are at the forefront of urological innovation, strongly emphasizing minimally invasive approaches. Our department utilizes advanced endourology and laparoscopy techniques to treat conditions with smaller incisions, less pain, and faster recovery times. We offer comprehensive management for kidney stones, utilizing laser lithotripsy to effectively break down and remove stones without open surgery. For benign prostatic hyperplasia (BPH), we provide a range of modern therapies to improve urinary symptoms. Our multidisciplinary approach ensures that patients with urologic cancers receive integrated, comprehensive treatment plans involving surgeons, oncologists, and specialized support staff, aimed at achieving the best possible oncological and functional outcomes.",
      services: [
         { name: "Kidney Stone Management", desc: "Comprehensive treatment including Extracorporeal Shock Wave Lithotripsy (ESWL) and laser lithotripsy." },
         { name: "Prostate Care (BPH)", desc: "Medical and minimally invasive surgical treatments for an enlarged prostate." },
         { name: "Urologic Oncology", desc: "Surgical management of cancers of the prostate, kidney, bladder, and testes." },
         { name: "Female Urology", desc: "Treatment for urinary incontinence, pelvic organ prolapse, and recurrent UTIs." },
         { name: "Male Infertility & Sexual Health", desc: "Evaluation and treatment of erectile dysfunction and male infertility issues." },
         { name: "Endourology", desc: "Minimally invasive procedures using scopes to treat conditions within the urinary tract." },
         { name: "Reconstructive Urology", desc: "Surgery to restore normal function to the urinary tract after injury or disease." },
         { name: "Pediatric Urology", desc: "Care for urological conditions in children, such as undescended testes and hypospadias." }
      ],
      technology: [
         "Holmium Laser for Kidney Stone Lithotripsy",
         "Flexible Digital Ureteroscopes",
         "Advanced Urodynamics Testing Equipment",
         "Transrectal Ultrasound (TRUS) for Prostate Biopsy",
         "Laparoscopic Surgical Equipment",
         "Extracorporeal Shock Wave Lithotripter (ESWL)"
      ],
      faqs: [
         { q: "What is the best treatment for kidney stones?", a: "Treatment depends on the size, location, and composition of the stone. Options range from conservative management (drinking water and pain relief) to minimally invasive procedures like laser lithotripsy or ESWL." },
         { q: "What are the symptoms of an enlarged prostate (BPH)?", a: "Common symptoms include frequent or urgent need to urinate, difficulty starting urination, weak urine stream, and the feeling of incomplete bladder emptying." },
         { q: "Is urinary incontinence a normal part of aging?", a: "While common, incontinence is not a normal or unavoidable part of aging. It is a medical condition that can often be effectively treated with medication, physical therapy, or minimally invasive surgery." },
         { q: "What should I expect during a prostate exam?", a: "A typical prostate exam involves a Digital Rectal Exam (DRE) where the doctor checks the size and consistency of the prostate, often accompanied by a Prostate-Specific Antigen (PSA) blood test." }
      ]
   },
   "emergency": {
      name: "Emergency",
      title: "24/7 Rapid Emergency Response",
      icon: Clock,
      color: "from-[#F77F00] to-[#FCBF49]",
      image: "/hospitalimg.webp",
      overview: "Our Emergency Department is open 24 hours a day, 7 days a week, ready to provide immediate, life-saving care for acute illnesses and severe injuries. Our rapid response teams are trained to handle critical situations with speed and expertise.",
      longDescription1: "When seconds count, the Emergency Department (ED) at Samrat Hospital is prepared. We provide immediate, comprehensive medical care for patients of all ages presenting with acute, life-threatening illnesses and injuries. Our ED is staffed 24/7 by board-certified emergency medicine physicians, highly trained emergency nurses, and specialized trauma technicians. We are equipped to handle everything from minor injuries to severe trauma, cardiac arrests, strokes, and complex medical emergencies. Our facility features a streamlined triage system designed to quickly assess the severity of each patient's condition, ensuring that the most critical cases receive immediate, life-saving intervention.",
      longDescription2: "Our Emergency Department is backed by the full resources of Samrat Hospital. We have immediate, round-the-clock access to advanced diagnostic imaging (CT, MRI, Ultrasound), a fully equipped laboratory, and specialized surgical and critical care teams ready to intervene at a moment's notice. We operate specific protocols for time-sensitive conditions; for example, our rapid response \"Code Stroke\" and \"Code STEMI\" (heart attack) teams are activated instantly to minimize tissue damage and save lives. We are dedicated to providing fast, effective, and compassionate care during what is often the most stressful moment in a patient's life, serving as the critical safety net for our community.",
      services: [
         { name: "Advanced Trauma Life Support", desc: "Immediate, specialized care for patients with severe, multiple injuries." },
         { name: "Cardiac Emergency Care", desc: "Rapid assessment and intervention for heart attacks, arrhythmias, and heart failure." },
         { name: "Stroke Protocol Activation", desc: "Fast-track diagnosis and treatment for suspected strokes to minimize brain damage." },
         { name: "Pediatric Emergency Care", desc: "Specialized care tailored to the unique physiological and emotional needs of children." },
         { name: "Orthopedic Emergencies", desc: "Immediate management of fractures, dislocations, and severe sprains." },
         { name: "Respiratory Emergencies", desc: "Treatment for severe asthma attacks, COPD exacerbations, and acute respiratory distress." },
         { name: "Toxicology and Poison Control", desc: "Management of overdoses and exposure to toxic substances." },
         { name: "Surgical Emergencies", desc: "Rapid evaluation for conditions requiring immediate surgery, such as appendicitis." }
      ],
      technology: [
         "Dedicated Resuscitation and Trauma Bays",
         "Immediate Access to 24/7 CT, MRI, and X-ray",
         "Point-of-Care Ultrasound for Rapid Diagnosis",
         "Stat Laboratory Services with Rapid Turnaround Times",
         "Advanced Cardiac Monitoring and Defibrillation Equipment",
         "Direct Communication Links with EMS and Ambulances"
      ],
      faqs: [
         { q: "When should I go to the Emergency Room?", a: "Go to the ER immediately for life-threatening conditions such as chest pain, difficulty breathing, severe bleeding, sudden weakness or numbness (signs of stroke), major trauma, or loss of consciousness." },
         { q: "What is triage?", a: "Triage is the process of prioritizing patients based on the severity of their condition. Patients with life-threatening emergencies are treated first, regardless of the order of arrival." },
         { q: "Do I need an appointment for the Emergency Room?", a: "No. The Emergency Department is open 24/7 and no appointment is necessary. Walk-ins and ambulance arrivals are accepted at all times." },
         { q: "How long will I have to wait?", a: "Wait times vary depending on the number of patients and the severity of their conditions. We strive to see every patient as quickly as possible, but critical emergencies will always take precedence." }
      ]
   },
   "interventional-pain": {
      name: "Interventional Pain",
      title: "Interventional Pain Management",
      icon: Activity,
      color: "from-[#00A896] to-[#028090]",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2ONF_M5BOTSaMsgapChBlqoP76zHeJAu-Q&s",
      overview: "Our Interventional Pain Department focuses on the diagnosis and treatment of chronic and acute pain disorders. We use advanced, minimally invasive techniques to pinpoint the source of pain and deliver targeted therapies to provide long-lasting relief.",
      longDescription1: "Chronic pain is a complex condition that can severely impact every aspect of a person's life, limiting mobility, disturbing sleep, and affecting mental well-being. The Interventional Pain Department at Samrat Hospital offers hope and advanced solutions for patients suffering from persistent pain. Our multidisciplinary team, led by fellowship-trained pain management specialists, focuses on accurately diagnosing the root cause of pain and implementing targeted, minimally invasive treatments. We treat a wide variety of conditions, including chronic back and neck pain, sciatica, arthritis, neuropathy, and complex regional pain syndrome (CRPS). Our goal is to reduce pain severity, improve physical function, and enhance the overall quality of life for our patients.",
      longDescription2: "Interventional pain management relies on precision medicine. We utilize advanced image guidance, such as fluoroscopy (real-time X-ray) and ultrasound, to precisely deliver medications or therapies directly to the specific nerves, joints, or tissues causing the pain. These minimally invasive procedures, which include epidural steroid injections, nerve blocks, and radiofrequency ablation, offer significant relief with minimal downtime, often serving as an effective alternative or stepping stone before considering major surgery. We view pain management comprehensively; our interventions are often integrated with physical therapy, medication optimization, and psychological support to ensure a holistic and durable approach to pain relief.",
      services: [
         { name: "Epidural Steroid Injections", desc: "Targeted anti-inflammatory injections to relieve pain from herniated discs and spinal stenosis." },
         { name: "Facet Joint Injections", desc: "Diagnostic and therapeutic injections for arthritis-related back and neck pain." },
         { name: "Radiofrequency Ablation (RFA)", desc: "A procedure that uses heat to temporarily turn off the nerve's ability to send pain signals." },
         { name: "Spinal Cord Stimulation", desc: "An implanted device that uses electrical pulses to mask pain signals before they reach the brain." },
         { name: "Major Joint Injections", desc: "Image-guided injections for arthritis pain in the knees, hips, and shoulders." },
         { name: "Sympathetic Nerve Blocks", desc: "Injections to diagnose and treat complex regional pain syndrome (CRPS) and neuropathic pain." },
         { name: "Trigger Point Injections", desc: "Treatment for painful knots in muscles (myofascial pain)." },
         { name: "Platelet-Rich Plasma (PRP) Therapy", desc: "Regenerative medicine using the patient's own blood platelets to promote healing in injured tissues." }
      ],
      technology: [
         "High-Resolution Fluoroscopy (C-Arm) for Precise Image Guidance",
         "Advanced Ultrasound Machines for Soft Tissue and Nerve Imaging",
         "Radiofrequency Ablation Generators",
         "Dedicated Fluoroscopy Suites",
         "Spinal Cord Stimulator Trial and Implantation Capabilities",
         "Regenerative Medicine Preparation Equipment"
      ],
      faqs: [
         { q: "What is interventional pain management?", a: "It's a specialized field of medicine that uses minimally invasive, image-guided procedures (like injections or nerve blocks) to diagnose and treat chronic pain directly at its source." },
         { q: "Are pain injections painful?", a: "We use local anesthesia to numb the skin and deeper tissues before the procedure to minimize discomfort. Most patients tolerate these procedures very well." },
         { q: "How long does the relief from an injection last?", a: "The duration of relief varies significantly among patients and depends on the specific condition and the type of injection. It can range from weeks to several months." },
         { q: "Is interventional pain management an alternative to surgery?", a: "Yes, for many patients, interventional procedures can provide sufficient pain relief to delay or completely avoid the need for major surgery. It is often a key part of conservative management." }
      ]
   }
};

export default function SpecialtyPage(props) {
   const params = use(props.params);
   const { slug } = params;
   const specialty = specialtyData[slug];

   if (!specialty) {
      notFound();
   }

   const gradientClasses = specialty.color; // e.g., "from-[#D62828] to-[#F77F00]"
   const gradientFrom = specialty.color.split(" to ")[0].replace("from-[", "").replace("]", "");

   return (
      <div className="min-h-screen bg-white">
         {/* Hero Section */}
         <section className={`relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br ${gradientClasses}`}>
            <div className="absolute inset-0 z-0">
               <img src={specialty.image} alt={specialty.name} className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/30 via-transparent to-[#1E3A5F]/80" />
               <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full opacity-50" />
               <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full opacity-50" />
            </div>

            <div className="container mx-auto px-6 py-10 relative z-10">
               <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <specialty.icon className="w-10 h-10 text-white" />
                     </div>
                     <span className="text-xl font-medium tracking-wider uppercase bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                        Department
                     </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">{specialty.title}</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                     {specialty.overview}
                  </p>
               </div>
            </div>
         </section>

         {/* Overview Section */}
         <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-10 border-b-4 pb-4 inline-block" style={{ borderBottomColor: gradientFrom }}>
                     Department Overview
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                     <p className="text-xl leading-relaxed">{specialty.longDescription1}</p>
                     <p className="text-xl leading-relaxed">{specialty.longDescription2}</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Services Section */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-center text-[#1E3A5F] mb-16">Key Services & Procedures</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {specialty.services.map((service, index) => (
                     <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-transparent group" style={{ hover: { borderColor: gradientFrom } }}>
                        <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center transition-colors" style={{ backgroundColor: `${gradientFrom}15`, color: gradientFrom }}>
                           <ShieldPlus className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 group-hover:text-current transition-colors" style={{ hover: { color: gradientFrom } }}>{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Technology Section */}
         <section className={`py-20 bg-gradient-to-br from-[#E6F4F1] via-[#F0F9F8] to-[#E6F4F1] relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F77F00]/10 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2">
                     <img src={specialty.image} alt="Technology" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
                  </div>
                  <div className="md:w-1/2">
                     <h2 className="text-4xl font-bold text-[#1E3A5F] mb-8">State-of-the-Art Technology</h2>
                     <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        We invest in the latest medical technologies to ensure precise diagnoses, effective treatments, and the highest standards of patient safety.
                     </p>
                     <ul className="space-y-6">
                        {specialty.technology.map((tech, index) => (
                           <li key={index} className="flex items-start gap-4">
                              <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" style={{ color: gradientFrom }} />
                              <span className="text-lg text-gray-700 font-medium">{tech}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center text-[#1E3A5F] mb-16">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                     {specialty.faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                           <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{faq.q}</h3>
                           <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses}`} />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

                  <div className="relative p-12 md:p-20 text-center">
                     <div className="absolute top-8 right-12 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />
                     <div className="absolute bottom-8 left-12 w-16 h-16 bg-white/10 rounded-xl -rotate-12" />

                     <div className="max-w-2xl mx-auto relative">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Schedule an Appointment?</h2>
                        <p className="text-white/90 text-lg mb-10">
                           Our expert team is here to provide you with the best possible care. Contact us today to book your consultation with the {specialty.name} department.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                           <Link href="/book-appointment">
                              <Button className="bg-white text-[#1E3A5F] hover:bg-gray-100 px-10 py-7 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                 Book Appointment Online
                                 <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                           </Link>
                           <Link href="/contact">
                              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-10 py-7 rounded-full text-lg font-bold transition-all bg-transparent">
                                 Contact Department
                              </Button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
