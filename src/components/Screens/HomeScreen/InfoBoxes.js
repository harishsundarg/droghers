import React from 'react'

const InfoBoxes = () => {
    return (
        <div>
            <div class="info-boxes wow fadeInUp">
                <div class="info-boxes-inner">
                    <div class="row">
                        <div class="col-md-6 col-sm-4 col-lg-4">
                            <div class="info-box">
                                <div class="row">

                                    <div class="col-xs-12">
                                        <h4 class="info-box-heading green">money back</h4>
                                    </div>
                                </div>
                                <h6 class="text">30 Days Money Back Guarantee</h6>
                            </div>
                        </div>
                        {/* <!-- .col --> */}

                        <div class="hidden-md col-sm-4 col-lg-4">
                            <div class="info-box">
                                <div class="row">

                                    <div class="col-xs-12">
                                        <h4 class="info-box-heading green">free shipping</h4>
                                    </div>
                                </div>
                                <h6 class="text">Shipping on orders over &#x20b9;99</h6>
                            </div>
                        </div>
                        {/* <!-- .col --> */}

                        <div class="col-md-6 col-sm-4 col-lg-4">
                            <div class="info-box">
                                <div class="row">

                                    <div class="col-xs-12">
                                        <h4 class="info-box-heading green">Special Sale</h4>
                                    </div>
                                </div>
                                <h6 class="text">Extra &#x20b9;5 off on all items </h6>
                            </div>
                        </div>
                        {/* <!-- .col --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.info-boxes-inner --> */}
            </div>
            {/* <!-- /.info-boxes --> */}
        </div>
    )
}

export default InfoBoxes
