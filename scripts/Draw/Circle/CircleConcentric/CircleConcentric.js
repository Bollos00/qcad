/**
 * Copyright (c) 2011-2016 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */

include("../../Line/LineParallel/LineParallel.js");

/**
 * \class CircleConcentric
 * \brief Circle concentric to an existing circle.
 * \ingroup ecma_draw_circle
 */
function CircleConcentric(guiAction) {
    LineParallel.call(this, guiAction);

    this.setUiOptions("CircleConcentric.ui");
}

CircleConcentric.prototype = new LineParallel();

