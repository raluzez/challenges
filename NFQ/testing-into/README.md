# NFQ-TESTINF-HW

# Part 1

Parašyti NumberFormatter klasę padengtą parametriniais (@dataprovider) unit testais, kuri sutrumpintų duotą skaičių(float => string):
 * Milijonas ir daugiau sutrumpinami iki milijonų ir paliekami du skaičiai po kablelio. (2835779 => 2.84M; 999500 => 1.00M) galioja 999 500 ≤ x < ∞
 * 100 000 ir daugiau trumpinami iki tūkstančių. (535216 => 535K; 99950 => 100K) galioja 99 950 ≤ x < 999 500
 * 1000 ir daugiau apvalinama sveikųjų tikslumu. Tarp tūkstančių ir šimtų vienas tarpas. (27533.78 => 27 534) (Galioja 1 000 ≤ x < 99 950) Pastaba: 999.99 => 999.99, o 999.9999 => 1 000
 * Visi kiti skaičiai apvalinami ir po kablelio rodomi du skaitmenys. Jeigu abu jie yra nuliai - rodomas sveikas skaičius. (533.1 => 533.10; 66.6666 => 66.67, 12.00 => 12) galioja 0 ≤ x < 1 000
 * Analogiškas neigiamų skaičių formatavimas (-123654.89 => -124K)
 
 # Part 2
 
 Parašyti MoneyFormatter klasę padengtą unit testais, kuri turi du metodus:
  * formatEur(number) - iškviečia NumberFormatter metodą ir prie gauto rezultato gale prideda tarpą su euro simboliu.  Pvz: 2835779 => 2.84M €, 211.99 => 211.99 €. 
  * formatUsd(number) - iškviečia NumberFormatter metodą ir prie gauto rezultato pradžioje prideda dolerio simbolį.  Pvz: 2835779 => $2.84M, 211.99 => $211.99.
  * Abiems metodams parašyti testus, kuriuose vietoj tikrojo NumberFormatter būtųnaudojamas jo mock
