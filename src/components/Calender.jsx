import React from "react";

const Calender = () => {
  return (
    <div className="flex flex-col text-center">
      <div>September 2019</div>
      {/* Calender */}
      <table className=" text-center">
        <tr>
          <td>Sun</td>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
        </tr>
        <tr>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
        </tr>
        <tr>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
        </tr>
        <tr>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
        </tr>
        <tr>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <div></div>
    </div>
  );
};

export default Calender;
